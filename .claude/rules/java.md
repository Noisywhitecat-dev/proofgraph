---
paths:
  - "services/core-api/**"
---

# Java / Spring Boot 규칙 (틀)

> 1단계에서 `services/core-api/`를 만들 때 채운다. 지금은 비어 있다.
> 채울 때는 규칙을 여기에 복사하지 말고, 가능한 한 빌드·포맷 설정 파일(Gradle, Spotless)을 가리킨다.

## 채울 항목
- 빌드·테스트 명령 (`just` 레시피 이름)
- 패키지 구조와 계층 규칙
- 포매터: Spotless 연결 후 `.claude/hooks/format.mjs`의 `.java` 항목을 `enabled: true`로
- 테스트 규칙 (단위 / 통합, Testcontainers 사용 여부)
- 자주 하는 실수 (Gotchas)
