# infra

- **역할:** 로컬 Docker Compose, 클라우드 Terraform
- **언어:** YAML / HCL
- **생성 단계:** 0단계(로컬), 5단계(클라우드) (로드맵 [docs/ROADMAP.md](../docs/ROADMAP.md))
- **상태:** 로컬 인프라 동작 중 (0.5)

## 로컬 인프라 (`compose.yaml`)

| 서비스 | 이미지 | 포트 (localhost 전용) | 용도 |
|---|---|---|---|
| postgres | `pgvector/pgvector:pg17` | 5432 | 주 데이터베이스. `vector`, `pg_trgm` 확장 자동 설치 |
| redis | `redis:7.4-alpine` | 6379 | 캐시, 큐, 요청 제한 (AOF로 영속화) |

- 실행은 루트에서 `just up` / `just down`. 값은 루트 `.env`로 바꿀 수 있다 (`.env.example` 참고).
- `postgres/init/`의 SQL은 **데이터 볼륨이 비어 있을 때 한 번만** 실행된다. 확장을 추가했다면 `just nuke` 후 `just up`, 또는 마이그레이션으로 처리한다.
- 객체 저장소는 1.7에서 결정한다 (ADR-0003).

이 영역을 만들 때 같은 폴더에 `AGENTS.md`를 추가하고, 하위 제목을 `Setup` / `Commands` / `Testing` / `Code Style` / `Gotchas`로 맞춘다.
