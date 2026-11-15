# STATUS — 현재 진행 상황

> 이 파일은 CLAUDE.md에서 매 세션 자동으로 불러온다. 짧게 유지한다 (30줄 이내).
> 작업 단위가 끝날 때마다 Claude가 갱신한다.

**마지막 갱신:** 2026-11-16
**현재 단계:** 0단계 — 기반 (진행 중)
**저장소:** https://github.com/Noisywhitecat-dev/proofgraph (공개, main)

## 완료
- 기획 문서 일체, ADR-0001 주제 선정, ADR-0002 기술 스택과 도구
- 0.1 착수 결정: AI 엔지니어 목표, 주 30시간+, 전 언어 숙련도 0, 한국어 커밋, just, 월 3만 원, MCP는 Python
- 0.2 git 초기화, 공개 GitHub 저장소, README, MIT, .gitignore, .gitattributes
- 0.3 모노레포 뼈대 (서비스별 README)
- 0.4 just 1.59.0 설치, 루트 justfile
- 0.5 로컬 인프라: Postgres 17 + pgvector 0.8.7, Redis 7.4 (`just up`). MinIO는 1.7로 미룸 (ADR-0003)
- 0.6 CI: `just check`와 gitleaks, PR 템플릿 (PR #1, 사용자가 머지)
- main 보호 규칙: PR 필수, CI 두 검사 필수, 관리자도 적용, 강제 푸시·삭제 금지 (PR #2)
- 채팅 관리 규칙: 적절한 때 새 채팅으로 인계, 기록은 `docs/sessions.md`
- 소유자 프로필은 `private/profile.md` (gitignore). 학력 공개 허용, 부트캠프 저장소 `dev_community`, `Fevalgo`
- 사용자는 개발 입문자: 새 개념은 쉽게 설명하고 `docs/glossary.md`에 추가

## 다음 작업
1. 0.7 Claude Code 작업 환경 (hooks, rules, tutor·reviewer 에이전트, /til·/adr·/sync-status skill)
2. 0.8 [직접] 첫 학습 로그, 0단계 검수 질문 (P0-L1, P0-L2, P0-E2)

## 막힌 것
- 없음

## 메모
- 커밋 이메일은 이 저장소에만 GitHub noreply로 설정
- 브랜치 → push → Claude가 미리 채운 PR 화면을 열기 → 사용자가 수정·생성 → CI 통과 → 사용자가 머지
