---
paths:
  - "services/ai-pipeline/**"
  - "services/mcp-server/**"
---

# Python 규칙 (틀)

> 1단계에서 `services/ai-pipeline/`을 만들 때 채운다. 지금은 비어 있다.
> 채울 때는 규칙을 여기에 복사하지 말고, 가능한 한 `pyproject.toml`(ruff, mypy 설정)을 가리킨다.

## 채울 항목
- 가상환경과 패키지 관리 도구, 실행·테스트 명령 (`just` 레시피 이름)
- 포매터·린터: ruff 설치 후 `.claude/hooks/format.mjs`의 `.py` 항목을 `enabled: true`로
- 타입 힌트 규칙
- LLM 호출 규칙 (외부 콘텐츠는 신뢰하지 않는 입력, 비용 상한)
- 자주 하는 실수 (Gotchas)
