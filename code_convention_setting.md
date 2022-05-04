# CCS(정리이기 때문에 구분짓기 위해 snake_case 사용.)

#### 맨 아래까지 끝까지 읽어주세요!!

## Common

-   almost_camel_case
-   tabwidth: 4
-   end_comma\*\n: true
-   end_semicolon: true
-   maxline: 100
-   use\_'': true
-   blank*inside*{}: true
-   no_single_var_in_arr_func: true
-   set_md: true
-   개행문자 유지..(가끔 뜨는 애러 제거.): true
    <!-- - call-back_func: arrow_func   -->
    <!-- - first_class_word: large  (X)  -->

### 아래 3개는 프론트용

차례대로

-   JSX의 마지막 `>`를 다음 줄로 내릴지 여부
-   JSX에 singe 쿼테이션 사용 여부
-   혹시몰라서 넣어놓은 vue파일의 들여쓰기 여부.

## git pull 후 로컬에서 세팅할 것!!

-   setting.json에서 아래 9줄을 추가해주세요.
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "eslint.alwaysShowStatus": true,
    "eslint.validate": ["javascript", "javascriptreact", "html"],
    "editor.stickyTabStops": true,
    "prettier.useTabs": true,
    "emmet.triggerExpansionOnTab": true,
    "prettier.tabWidth": 4,
    "editor.codeActionsOnSave": { "source.fixAll.eslint": true }

#### ref : https://ui.toast.com/fe-guide/ko_CODING-CONVENTION

#### ref2 : https://techwell.wooritech.com/docs/tools/prettier/prettier-eslint-airbnb/
