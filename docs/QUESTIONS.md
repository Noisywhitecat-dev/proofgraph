# QUESTIONS — 질문과 답 기록

Claude가 사용자에게 한 질문과 답을 기록한다. 질문 ID와 유형은 `docs/ROADMAP.md`의 "읽는 법"을 따른다.
답이 결정이면 ADR이나 해당 문서에 반영하고, "반영" 칸에 위치를 적는다.

## 대기 중

| ID | 질문 | 기본값 (답이 없을 때) | 막는 작업 |
|---|---|---|---|
| — | (대기 중인 질문 없음) | — | — |

## 답변 완료

| 날짜 | ID | 질문 | 답 | 반영 |
|---|---|---|---|---|
| 2026-11-16 | P0-D1 | 목표 직무 우선순위 | AI 엔지니어 | ADR-0002, ROADMAP |
| 2026-11-16 | P0-C2 | 주당 투입 시간 | 주 30시간 이상 | ADR-0002, ROADMAP 기간 |
| 2026-11-16 | P0-D5 | 저장소 이름과 공개 여부 | `proofgraph`, 공개 | ADR-0002 |
| 2026-11-16 | P0-D6 | 커밋 메시지 언어 | 한국어 | ADR-0002, AGENTS.md |
| 2026-11-16 | P0-D7 | 태스크 러너 | 사용자가 추천을 요청 → just | ADR-0002 |
| 2026-11-16 | P0-D8 | 월 비용 상한 | 3만 원 | ADR-0002 |
| 2026-11-16 | P0-D9 | MCP 서버 언어 | Python | ADR-0002, AGENTS.md |
| 2026-11-16 | — | 라이선스 | MIT | LICENSE |
| 2026-11-16 | P0-C3 | 언어별 숙련도 | 전 언어 0으로 가정 | `private/profile.md`, ROADMAP 조정 |
| 2026-11-16 | P0-C4 | 경력, 학력, 프로젝트, 자격증 | 학력·교육 이력 있음, 경력·자격증 없음 (상세는 비공개 파일) | `private/profile.md` |
| 2026-11-16 | P0-C6 | 부트캠프 결과물 저장소 | `dev_community`, `Fevalgo` (둘 다 공개, Java) | `private/profile.md`, ROADMAP 1.7 |
| 2026-11-16 | P0-C7 | 학력 공개 여부 | 공개 허용 | `private/profile.md` |
| 2026-11-16 | P0-C8 | 졸업 시기 | 졸업함 (상세는 비공개 파일) | `private/profile.md` |
| 2026-11-16 | P0-D10 | hook 스크립트 언어 (Node.js / PowerShell / Python) | Node.js (이미 설치됨, Windows·Linux 공통) | `.claude/hooks/format.mjs`, ADR-0004 |
| 2026-11-16 | P0-D11 | 권한 허용 목록 범위 (읽기만 / 읽기+커밋 / 최소) | 읽기 명령만. 커밋·push·삭제는 매번 확인 | `.claude/settings.json`, ADR-0004 |
| 2026-11-16 | P0-D12 | tutor 에이전트 방식 (설명+퀴즈 / 퀴즈 위주 / 설명만) | 설명 후 퀴즈 2~3개, 정답은 사용자가 답한 뒤 공개 | `.claude/agents/tutor.md` |

## 계획에 없던 질문

| 날짜 | ID | 상황 | 질문 | 답 | 반영 |
|---|---|---|---|---|---|
| 2026-11-16 | P0-C5 | 전역 git 이메일이 noreply가 아니어서 공개 커밋에 노출될 상황 | 이 저장소의 커밋 이메일 | GitHub noreply 사용 | 저장소 로컬 git 설정, ADR-0002 |
| 2026-11-16 | P0-D13 | `/status`가 Claude Code 기본 명령과 이름이 겹쳐 skill로 쓸 수 없음 | STATUS 갱신 skill 이름 | `/sync-status` | `.claude/skills/sync-status/`, ROADMAP 0.7 |
| 2026-11-16 | P0-D14 | 사용자가 여러 언어를 한곳에서 볼 IDE 추천을 요청 (무료 우선) | 학습용 IDE | VS Code (무료). Java가 답답하면 1단계에서 IntelliJ 무료 버전을 추가로 검토. 확장은 단계별로 설치 | `.vscode/extensions.json` |
| 2026-11-16 | P0-C9 | 상위 폴더(`D:ClaudeVault`)에서 연 세션은 `proofgraph/.claude/`의 hooks·skills를 읽지 않음 | 실제 동작 확인 방법 | Claude가 `proofgraph` 폴더에서 확인용 세션을 연다 | ADR-0004 |
