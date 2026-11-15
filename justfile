# ProofGraph 루트 명령 모음. `just`만 입력하면 목록이 나온다.
# 레시피는 sh(Linux/macOS/CI)와 PowerShell(Windows) 양쪽에서 동작하는 단순 명령으로 쓴다.

set windows-shell := ["powershell.exe", "-NoLogo", "-NoProfile", "-Command"]
# 루트 .env가 있으면 레시피 환경 변수로 불러온다 (docker compose의 ${VAR}에 쓰인다)
set dotenv-load := true

# 사용 가능한 명령 목록
default:
    @just --list

compose := "docker compose -f infra/compose.yaml"

# 로컬 인프라 기동 (모든 서비스가 healthy가 될 때까지 기다린다)
up:
    {{compose}} up -d --wait

# 로컬 인프라 중지 (데이터는 볼륨에 남는다)
down:
    {{compose}} down

# 로컬 인프라 상태
ps:
    {{compose}} ps

# 로그 보기. 예: just logs postgres
logs service="":
    {{compose}} logs --tail 100 {{service}}

# Postgres 접속 (psql)
psql:
    {{compose}} exec postgres psql -U {{env("POSTGRES_USER", "proofgraph")}} -d {{env("POSTGRES_DB", "proofgraph")}}

# 로컬 데이터까지 모두 삭제 (되돌릴 수 없음)
[confirm("볼륨의 데이터가 모두 삭제됩니다. 계속할까요?")]
nuke:
    {{compose}} down -v

# 커밋 전 전체 검사 (CI도 이 명령을 그대로 실행한다). 서비스가 생기면 여기에 검사를 추가한다
check:
    {{compose}} config --quiet
    node --check .claude/hooks/format.mjs
    node -e "JSON.parse(require('fs').readFileSync('.claude/settings.json', 'utf8'))"
    @echo "check: OK"

# 개발 도구 설치 상태 확인
doctor:
    git --version
    docker --version
    docker compose version
    just --version
