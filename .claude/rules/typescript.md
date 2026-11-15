---
paths:
  - "apps/**"
---

# TypeScript 규칙 (틀)

> 1단계에서 `apps/web/`을 만들 때 채운다. 지금은 비어 있다.
> 채울 때는 규칙을 여기에 복사하지 말고, 가능한 한 `tsconfig.json`, ESLint, Prettier 설정을 가리킨다.

## 채울 항목
- 패키지 매니저와 실행·테스트 명령 (`just` 레시피 이름)
- 포매터: Prettier 연결 후 `.claude/hooks/format.mjs`의 `.ts`, `.tsx` 항목을 `enabled: true`로
- 컴포넌트·폴더 구조 규칙
- 화면 변경은 브라우저에서 직접 확인 (AGENTS.md Verification Loop)
- 자주 하는 실수 (Gotchas)
