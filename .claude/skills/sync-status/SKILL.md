---
name: sync-status
description: docs/STATUS.md와 docs/ROADMAP.md 체크박스를 현재 상태로 갱신한다. 작업 단위가 끝났을 때, 새 채팅으로 인계하기 전에, 또는 사용자가 /sync-status를 입력했을 때 사용한다.
argument-hint: "[방금 끝낸 작업]"
---

# /sync-status — 진행 상황 갱신

방금 끝낸 작업: $ARGUMENTS (비어 있으면 이번 대화와 `git log`, `git status`에서 찾는다)

## 순서
1. `docs/STATUS.md`, `docs/ROADMAP.md`의 현재 단계 섹션, `git log --oneline -10`, `git status`를 확인한다.
2. `docs/STATUS.md`를 고친다.
   - **마지막 갱신:** 오늘 날짜
   - **완료:** 끝낸 작업을 한 줄로 추가한다. 비슷한 줄은 합친다
   - **다음 작업:** ROADMAP에서 아직 체크되지 않은 다음 항목 1~3개
   - **막힌 것:** 사용자 답을 기다리는 것, 외부 조건 때문에 멈춘 것. 없으면 "없음"
   - 파일 전체가 **30줄 이내**가 되게 한다. 넘치면 오래된 완료 항목을 단계 단위로 묶는다
3. `docs/ROADMAP.md`에서 실제로 끝난 항목만 `[x]`로 바꾼다. 하위 항목이 모두 끝났을 때만 상위 항목을 체크한다.
4. `docs/QUESTIONS.md`의 "대기 중" 질문과 STATUS의 "막힌 것"이 서로 맞는지 확인한다.
5. 바꾼 내용을 3줄 이내로 사용자에게 알려 준다. 끝나지 않은 것을 끝났다고 쓰지 않는다.
