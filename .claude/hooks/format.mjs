// PostToolUse hook: Claude가 파일을 수정(Edit/MultiEdit/Write)한 직후 Claude Code가 이 스크립트를 실행한다.
// 표준 입력(stdin)으로 받은 JSON에서 수정된 파일 경로를 꺼내, 확장자에 맞는 포매터를 실행한다.
//
// 지금은 서비스 코드가 없어서 포매터가 연결되어 있지 않다 (enabled: false).
// 서비스를 만들 때 FORMATTERS의 해당 항목을 enabled: true로 바꾸고 명령을 확인한다.
//
// 종료 코드 규칙 (Claude Code hooks)
//   0: 정상. 포매팅 성공 또는 건너뜀
//   2: 포매터가 오류를 냈다. stderr 내용이 Claude에게 전달되어 Claude가 고칠 수 있다
//
// 실행 기록은 .claude/hooks/format.log에 남는다 (gitignore 대상).
// 수동 테스트: echo '{"tool_input":{"file_path":"README.md"}}' | node .claude/hooks/format.mjs

import { spawnSync } from "node:child_process";
import { appendFileSync, readFileSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HOOK_DIR = dirname(fileURLToPath(import.meta.url));
const PROJECT_DIR = process.env.CLAUDE_PROJECT_DIR || resolve(HOOK_DIR, "..", "..");
const LOG_FILE = join(HOOK_DIR, "format.log");

// 확장자 → 포매터. {file}은 수정된 파일의 절대 경로로 바뀐다.
const FORMATTERS = {
  ".py": { name: "ruff", cmd: ["ruff", "format", "{file}"], enabled: false, since: "1단계 ai-pipeline" },
  ".java": { name: "spotless", cmd: [], enabled: false, since: "1단계 core-api (Gradle 태스크로 연결)" },
  ".ts": { name: "prettier", cmd: [], enabled: false, since: "1단계 web" },
  ".tsx": { name: "prettier", cmd: [], enabled: false, since: "1단계 web" },
  ".go": { name: "gofmt", cmd: ["gofmt", "-w", "{file}"], enabled: false, since: "4단계 collector" },
  ".rs": { name: "rustfmt", cmd: ["rustfmt", "{file}"], enabled: false, since: "6단계 search" },
};

function log(message) {
  const line = `${new Date().toISOString()} ${message}\n`;
  try {
    appendFileSync(LOG_FILE, line);
  } catch {
    // 기록 실패는 작업을 막을 이유가 아니다
  }
}

function readStdin() {
  try {
    return readFileSync(0, "utf8");
  } catch {
    return "";
  }
}

function main() {
  let input;
  try {
    input = JSON.parse(readStdin() || "{}");
  } catch {
    log("skip: stdin JSON 파싱 실패");
    return 0;
  }

  const filePath = input?.tool_input?.file_path;
  if (!filePath) {
    log("skip: file_path 없음");
    return 0;
  }

  const absolute = resolve(PROJECT_DIR, filePath);
  const rel = relative(PROJECT_DIR, absolute);
  if (rel.startsWith("..")) {
    log(`skip: 저장소 밖 파일 ${filePath}`);
    return 0;
  }

  const ext = extname(absolute).toLowerCase();
  const formatter = FORMATTERS[ext];
  if (!formatter) {
    log(`skip: ${rel} (${ext || "확장자 없음"}에 연결된 포매터 없음)`);
    return 0;
  }
  if (!formatter.enabled) {
    log(`skip: ${rel} (${formatter.name} 미연결, ${formatter.since}에 연결 예정)`);
    return 0;
  }

  const [command, ...args] = formatter.cmd.map((part) => part.replace("{file}", absolute));
  const result = spawnSync(command, args, { cwd: PROJECT_DIR, encoding: "utf8" });

  if (result.error?.code === "ENOENT") {
    log(`skip: ${rel} (${formatter.name} 설치 안 됨)`);
    return 0;
  }
  if (result.status !== 0) {
    log(`error: ${rel} (${formatter.name} 종료 코드 ${result.status})`);
    process.stderr.write(`${formatter.name} 포매팅 실패: ${rel}\n${result.stderr || result.stdout}`);
    return 2;
  }

  log(`formatted: ${rel} (${formatter.name})`);
  return 0;
}

process.exit(main());
