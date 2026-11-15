# STATUS — 현재 진행 상황

> 이 파일은 CLAUDE.md에서 매 세션 자동으로 불러온다. 짧게 유지한다 (30줄 이내).
> 작업 단위가 끝날 때마다 Claude가 갱신한다.

**마지막 갱신:** 2026-11-16
**현재 단계:** 0단계 — 기반 (완료, 0단계 검수 PR 머지 대기) → 다음은 1단계
**저장소:** https://github.com/Noisywhitecat-dev/proofgraph (공개, main)

## 완료
- 기획 문서 일체, ADR-0001 주제 선정, ADR-0002 기술 스택과 도구
- 0.1 착수 결정: AI 엔지니어 목표, 주 30시간+, 전 언어 숙련도 0, 한국어 커밋, just, 월 3만 원, MCP는 Python
- 0.2~0.6 공개 저장소, 모노레포 뼈대, just, 로컬 인프라(Postgres+pgvector, Redis, ADR-0003), CI와 main 보호 규칙 (PR #1, #2)
- 0.7 Claude Code 작업 환경 (ADR-0004, PR #4): hook·skill 3개 실제 동작 확인
- 0.8 첫 학습 로그, 0.9 공부할 것 복습 (Docker, Git, 모노레포, CI, ADR)
- 0단계 검수: P0-L1~L7 통과, E1·E2, R1~R3 회고. README에 대상과 로드맵 표 추가
- 작업 방식: 단계마다 설명 → 확인 질문 1개 → 진행 (P0-D15). 모든 단계 완료 기준에 공부 확인 (P0-R3). 언어는 T자형, Python 깊게 (P0-D16)
- 소유자 프로필은 `private/profile.md` (gitignore). 사용자는 개발 입문자 (새 개념은 `docs/glossary.md`에)

## 다음 작업
1. 0단계 검수 PR 머지 (사용자)
2. 1단계 착수: ROADMAP 1단계 "착수할 때" 질문, Java 입문 과제 (1단계 시작 전)
3. 1.1 [직접] 도메인 모델 설계 (ERD와 ADR)

## 막힌 것
- 없음

## 메모
- 예외: 0.8 학습 로그는 사용자 초안을 사용자 요청으로 Claude가 리뷰 의견에 맞춰 보완함 (사실은 사용자 확인)
- 브랜치 → push → Claude가 미리 채운 PR 화면 → 사용자가 생성·머지. 커밋 이메일은 이 저장소만 GitHub noreply
