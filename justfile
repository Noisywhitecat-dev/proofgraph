# ProofGraph 루트 명령 모음. `just`만 입력하면 목록이 나온다.
# 레시피는 sh(Linux/macOS/CI)와 PowerShell(Windows) 양쪽에서 동작하는 단순 명령으로 쓴다.

set windows-shell := ["powershell.exe", "-NoLogo", "-NoProfile", "-Command"]

# 사용 가능한 명령 목록
default:
    @just --list

# 개발 도구 설치 상태 확인
doctor:
    git --version
    docker --version
    docker compose version
    just --version
