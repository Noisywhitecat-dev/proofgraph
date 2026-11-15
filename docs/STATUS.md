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
- 0.4 just 1.59.0 설치, 루트 justfile (`just`, `just doctor`)
- 소유자 프로필은 `private/profile.md` (gitignore). 학력 공개 허용, 부트캠프 저장소 `dev_community`, `Fevalgo`

## 다음 작업
1. 0.5 Docker Compose (Postgres+pgvector, Redis, MinIO)와 `just up` / `just down`
2. 0.6 CI 뼈대
3. 대기 중 질문: P0-C8(졸업 시기)

## 막힌 것
- 없음

## 메모
- 커밋 이메일은 이 저장소에만 GitHub noreply로 설정
- 0.6 CI 전까지는 main에 직접 커밋. 이후로는 브랜치와 PR
