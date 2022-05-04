### Recommand 파일구조.

Recommand.js //추천페이지 컨테이너

-   RecommandContext.js //추천기능 상태관리
-   ContentRecommand.js //추천컨텐츠 컨테이너
    -   RecsysRequireInform.js //음식입력 대기상태
    -   RecsysInput.js //추천 음식입력 폼
    -   RecsysOutput.js // 추천 음식 출력
-   RecsysOutputAddon.js // 추천 음식 근거 추가 표현

기존 Pages, Contents 폴더에 나뉘었던 모듈들을  
모듈이 많아지면서 한 곳에 모았음
