# esd2026-agent-workflow — AI 에이전트 형상관리 튜토리얼

임베디드시스템설계 2026-2 (국민대학교) 기말 프로젝트 (개인 과제) 용 튜토리얼 사이트의 원본입니다.

- 사이트: https://yongsoojoo.github.io/esd2026-agent-workflow/
- 학생용 시작 템플릿: https://github.com/yongsoojoo/esd2026-starter
- 사례 저장소 (재구성 사례): https://github.com/yongsoojoo/esd2026-example-beam

## 구성

빌드 단계가 없는 정적 HTML 입니다. 파일을 고치고 push 하면 GitHub Pages 가 그대로 배포합니다.

```
start.html     0. 빠른 시작 (경험별 3 트랙 + 첫 연습 세션)
index.html     1. 개요            session.html   4. 세션 운영         case.html    7. 사례 따라 읽기
setup.html     2. 시작하기        lab.html       5. 실습 환경 · 측정  submit.html  8. 회고 · 제출
rules.html     3. 규칙 파일       topics.html    6. 주제별 가이드     terms.html   용어
git.html       기초 A. git · GitHub    ai-tools.html  기초 B. AI 도구의 형태    pi-setup.html  기초 C. Raspberry Pi 초기 설정
assets/style.css · assets/site.js (복사 버튼)
```

로컬에서 보려면 `index.html` 을 브라우저로 열거나 `python3 -m http.server` 후 http://localhost:8000 에 접속합니다.

## 갱신할 때

- 도구 정보 (요금 · 학생 혜택 · 지원 파일) 는 2026-10-05 기준입니다. 바꿀 때는 각 페이지 바닥의 기준일도 고칩니다
- 페이지 상단 내비게이션은 각 HTML 에 복사되어 있습니다. 페이지를 추가하면 모든 파일의 `<nav>` 를 함께 고칩니다

## 제작 과정의 AI 사용

이 사이트는 지도교수가 AI 코딩 에이전트 (Claude Code) 와 함께 작성하고 검토했습니다.
