# ProofGraph

[![CI](https://github.com/Noisywhitecat-dev/proofgraph/actions/workflows/ci.yml/badge.svg)](https://github.com/Noisywhitecat-dev/proofgraph/actions/workflows/ci.yml)

**학습·프로젝트·AI 활용 이력을 증빙으로 연결하고, 채용 시장과 대조해 "다음에 무엇을 해야 하는지"를 판단하는 개인 커리어 인텔리전스 시스템.**

> 🚧 0단계(기반) 진행 중. 진행 상황은 [docs/STATUS.md](docs/STATUS.md)에서 볼 수 있습니다.

## 무엇을 하나

- **증빙 그래프:** GitHub 커밋, PR, 학습 노트에서 기술을 자동으로 추출하고, 기술마다 근거를 연결합니다.
- **공고 적합도:** 채용공고와 내 그래프를 대조해 갭을 분석하고, 증빙에 근거한 맞춤 이력서 초안을 만듭니다.
- **출처가 달린 Q&A:** 하이브리드 검색과 RAG, 평가 세트로 품질을 측정합니다.
- **제한된 공유:** 회사별 공유 링크로 외부인이 공개된 증빙만 볼 수 있습니다. 접근 제어는 검색 단계에서 이루어집니다.

## 기술 스택

Java/Spring Boot · Python/FastAPI · Go · TypeScript/Next.js · PostgreSQL + pgvector · Redis · Claude API · MCP · Docker · GitHub Actions

## 문서

| 문서 | 내용 |
|---|---|
| [PROJECT.md](PROJECT.md) | 프로젝트 브리핑 |
| [docs/ROADMAP.md](docs/ROADMAP.md) | 단계별 로드맵과 학습 계획 |
| [docs/adr/](docs/adr/) | 설계 결정 기록 |
| [docs/learning-log/](docs/learning-log/) | 학습 로그 |
| [AGENTS.md](AGENTS.md), [CLAUDE.md](CLAUDE.md) | AI 에이전트 작업 가이드 |

## AI와 함께 개발하는 방식

이 프로젝트는 Claude Code를 적극적으로 활용합니다. 설계 판단과 핵심 개념 구현은 직접 하고, 반복 작업과 리뷰에 AI를 씁니다. 작업 규칙은 [CLAUDE.md](CLAUDE.md)에 공개되어 있습니다.

## License

[MIT](LICENSE)
