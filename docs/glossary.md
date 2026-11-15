# 용어집

프로젝트에서 처음 나온 개념을 한 줄로 정리한다. 처음 등장한 단계 순서대로 쌓는다.
더 깊은 내용은 학습 로그(`docs/learning-log/`)에 쓴다.

## 0단계

| 용어 | 한 줄 설명 | 이 프로젝트에서 |
|---|---|---|
| Git | 파일의 변경 이력을 저장하는 버전 관리 도구. 게임의 세이브 포인트처럼 언제든 과거 상태로 돌아갈 수 있다 | 모든 코드와 문서의 이력 |
| 커밋 (commit) | 변경 사항 묶음을 하나의 세이브 포인트로 저장하는 것 | 한 가지 목적의 변경 = 커밋 하나 |
| 저장소 (repository) | Git이 이력을 관리하는 프로젝트 폴더. GitHub에 올리면 원격 저장소가 된다 | `Noisywhitecat-dev/proofgraph` |
| 푸시 (push) | 내 PC의 커밋을 GitHub 원격 저장소로 올리는 것 | 작업이 끝날 때마다 |
| 브랜치 (branch) | 원본(main)을 건드리지 않고 따로 작업하는 평행 세계. 끝나면 main에 합친다 | `feat/…`, `chore/…` |
| PR (Pull Request) | "내 브랜치를 main에 합쳐 주세요"라는 요청. 합치기 전에 변경 내용을 검토하고 자동 검사를 돌린다 | 0.6부터 모든 작업 |
| 머지 (merge) | 브랜치의 변경을 main에 합치는 것 | PR 검토 후 |
| 모노레포 (monorepo) | 여러 서비스를 하나의 저장소에 모아 관리하는 방식 | Java, Python, Go, TS 서비스를 한곳에 |
| ADR | 설계 결정 기록. 무엇을, 왜 결정했고, 어떤 대안을 버렸는지 남긴 문서 | `docs/adr/` |
| 라이선스 (MIT) | 다른 사람이 내 코드를 어떻게 써도 되는지 정한 규칙. MIT는 출처만 밝히면 자유롭게 쓸 수 있다 | `LICENSE` |
| .gitignore | Git이 무시할 파일 목록. 비밀번호나 개인 정보, 빌드 결과물을 올리지 않게 한다 | `.env`, `private/` |
| 환경 변수 / .env | 코드 밖에서 주입하는 설정값. 비밀키를 코드에 직접 쓰지 않기 위해 쓴다 | API 키, DB 비밀번호 |
| 줄바꿈 (LF / CRLF) | 줄 끝을 표시하는 문자. Windows는 CRLF, Linux는 LF를 써서 차이가 생긴다 | `.gitattributes`로 LF 통일 |
| 태스크 러너 (just) | 긴 명령을 짧은 이름으로 묶어 두는 도구. 리모컨의 버튼 하나에 여러 동작을 저장하는 것과 비슷하다 | `just up`, `just doctor` |
| Docker | 프로그램을 실행 환경째 상자에 담아 어디서나 똑같이 돌리는 도구 | DB를 내 PC에 직접 설치하지 않고 실행 |
| 이미지 (image) | 컨테이너를 만드는 설계도. 붕어빵 틀 | `pgvector/pgvector:pg17` |
| 컨테이너 (container) | 이미지로 찍어 낸 실행 중인 프로그램. 붕어빵 | `proofgraph-postgres-1` |
| 볼륨 (volume) | 컨테이너를 지워도 남는 데이터 저장 공간 | DB 데이터 보존 |
| Docker Compose | 여러 컨테이너를 설정 파일 하나로 한꺼번에 켜고 끄는 도구 | `infra/compose.yaml` |
| 포트 (port) | 한 컴퓨터 안에서 프로그램을 구분하는 번호. 건물의 호수 | Postgres 5432, Redis 6379 |
| 헬스체크 (healthcheck) | 프로그램이 정상적으로 응답하는지 주기적으로 확인하는 것 | `just up`이 healthy까지 대기 |
| PostgreSQL | 표(테이블) 형태로 데이터를 저장하고 SQL로 조회하는 관계형 데이터베이스 | 주 데이터베이스 |
| 확장 (extension) | Postgres에 기능을 추가하는 플러그인 | `vector`, `pg_trgm` |
| pgvector | Postgres에서 임베딩 벡터를 저장하고 "가장 비슷한 것"을 찾게 해 주는 확장 | 3단계 의미 검색 |
| Redis | 메모리에 데이터를 두어 매우 빠르게 읽고 쓰는 저장소 | 캐시, 작업 대기열, 요청 제한 |
| 객체 저장소 (S3) | 파일을 통째로 저장하고 URL로 꺼내는 저장소 | 원본 문서 (1.7에서 결정) |
| CI (지속적 통합) | 코드를 올릴 때마다 자동으로 검사와 테스트를 돌려 문제를 일찍 찾는 것 | GitHub Actions |
| GitHub Actions | GitHub가 제공하는 CI 도구. 정해진 사건(push, PR)이 일어나면 클라우드 컴퓨터에서 명령을 실행한다 | `.github/workflows/ci.yml` |
| 워크플로 / 잡 / 스텝 | 워크플로는 자동화 전체, 잡은 한 컴퓨터에서 도는 작업 묶음, 스텝은 명령 하나 | `ci.yml` 구조 |
| 러너 (runner) | Actions가 명령을 실행하는 임시 클라우드 컴퓨터 | `ubuntu-latest` |
| 비밀값 스캔 (secret scanning) | 실수로 커밋한 비밀번호나 API 키를 찾아내는 검사 | gitleaks |
| PR 템플릿 | PR을 열 때 자동으로 채워지는 양식 | `.github/pull_request_template.md` |
| 브랜치 보호 규칙 | 중요한 브랜치에 거는 잠금장치. "PR로만, 검사를 통과해야만 합칠 수 있다" 같은 조건을 강제한다 | main 보호 |
| 필수 상태 검사 (required status check) | 머지 버튼이 켜지기 전에 반드시 통과해야 하는 CI 검사 | just check, gitleaks |
| 컨텍스트 창 (context window) | AI가 한 번에 기억하며 볼 수 있는 대화와 파일의 양. 책상 위 공간처럼 한계가 있어서 너무 차면 앞의 내용이 흐려진다 | 길어지면 새 채팅으로 인계 |
| 컨텍스트 압축 (compaction) | 긴 대화를 요약해 공간을 비우는 것. 요약 과정에서 세부 내용이 빠질 수 있다 | 압축으로 부족하면 새 채팅 |
| 세션 인계 (handoff) | 새 채팅이 이어서 일할 수 있게 상태와 결정을 파일과 첫 메시지로 넘기는 것 | `docs/STATUS.md`, `docs/sessions.md` |
| 강제 푸시 (force push) | 원격 저장소의 이력을 덮어쓰는 push. 남의 작업이나 기록을 지울 수 있어 보호 브랜치에서는 막는다 | main에서 금지 |
| JSON | `{"이름": "값"}` 모양으로 데이터를 적는 텍스트 형식. 이름표가 붙은 서랍장 | `.claude/settings.json` |
| 권한 허용 목록 (permissions allow) | Claude가 묻지 않고 실행해도 되는 명령 목록. 출입증 | 읽기 명령만 허용 |
| hooks | 특정 순간(파일 수정 직후 등)에 Claude Code 프로그램이 직접 실행하는 명령. Claude가 잊어도 반드시 실행되는 자동문 센서 | 파일 수정 후 포매터 실행 |
| 포매터 (formatter) | 들여쓰기·띄어쓰기 같은 코드 모양을 규칙대로 자동 정리하는 도구 | ruff, Spotless, Prettier (서비스 생성 시 연결) |
| 표준 입력 (stdin) | 프로그램이 실행될 때 바깥에서 흘려 넣어 주는 입력 통로. 우편함 투입구 | hook이 수정된 파일 정보를 JSON으로 받는 곳 |
| 종료 코드 (exit code) | 프로그램이 끝나며 남기는 숫자. 0은 성공, 그 외는 실패나 특별한 신호 | hook이 2를 내면 Claude에게 오류를 알린다 |
| 프런트매터 (frontmatter) | 마크다운 파일 맨 위 `---` 사이에 적는 설정 정보. 책 표지의 서지 정보 | skill·에이전트·rules의 이름, 설명, 적용 경로 |
| rules (`.claude/rules/`) | 특정 경로의 파일을 다룰 때만 Claude가 읽는 규칙 파일. 필요할 때만 펴 보는 과목별 참고서 | `docs.md`, 언어별 규칙 틀 |
| 서브에이전트 (subagent) | 정해진 역할만 맡아 별도 대화창에서 일하고 결과만 돌려주는 보조 Claude | `tutor`, `reviewer` |
| skill | `/이름`으로 불러 쓰는 작업 설명서. 자주 하는 일의 순서를 적은 레시피 카드 | `/til`, `/adr`, `/sync-status` |
