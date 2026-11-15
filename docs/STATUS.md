# STATUS — 현재 진행 상황

> 이 파일은 CLAUDE.md에서 매 세션 자동으로 불러온다. 짧게 유지한다 (30줄 이내).
> 작업 단위가 끝날 때마다 Claude가 갱신한다.

**마지막 갱신:** 2026-11-16
**현재 단계:** 0단계 — 기반 (진행 중, 0.8과 검수만 남음)
**저장소:** https://github.com/Noisywhitecat-dev/proofgraph (공개, main)

## 완료
- 기획 문서 일체, ADR-0001 주제 선정, ADR-0002 기술 스택과 도구
- 0.1 착수 결정: AI 엔지니어 목표, 주 30시간+, 전 언어 숙련도 0, 한국어 커밋, just, 월 3만 원, MCP는 Python
- 0.2~0.4 공개 GitHub 저장소(README, MIT), 모노레포 뼈대, just 1.59.0과 루트 justfile
- 0.5 로컬 인프라: Postgres 17 + pgvector 0.8.7, Redis 7.4 (`just up`). MinIO는 1.7로 미룸 (ADR-0003)
- 0.6 CI(`just check`, gitleaks), PR 템플릿, main 보호 규칙 (PR #1, #2)
- 0.7 Claude Code 작업 환경 (ADR-0004): 권한, 포매터 hook, rules, tutor·reviewer, /til·/adr·/sync-status. `proofgraph` 폴더 세션에서 hook(`format.log` 기록)과 skill 3개 실제 동작 확인
- 채팅 관리 규칙: 적절한 때 새 채팅으로 인계, 기록은 `docs/sessions.md`
- 소유자 프로필은 `private/profile.md` (gitignore). 학력 공개 허용, 부트캠프 저장소 `dev_community`, `Fevalgo`. 사용자는 개발 입문자 (새 개념은 `docs/glossary.md`에)

## 다음 작업
1. 0.7 PR 머지 (사용자)
2. 0.8 [직접] 첫 학습 로그: 뼈대 `docs/learning-log/2026-11-16-phase0-foundation.md`를 사용자가 채우고 Claude가 리뷰
3. 0단계 검수 질문: P0-L1, P0-L2(사용자 답 채점), P0-E2, 공통 R1~R3, E1

## 막힌 것
- 없음

## 메모
- 커밋 이메일은 이 저장소에만 GitHub noreply로 설정
- 브랜치 → push → Claude가 미리 채운 PR 화면을 열기 → 사용자가 수정·생성 → CI 통과 → 사용자가 머지
