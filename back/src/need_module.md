##### service.

라우터에서 내려온 comp를 작동, DB  
아이디를 설정해줄 모듈(first_proj에서는 uuid의 v4라는 것을 사용함.)  
-- https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-UUID-%EB%AA%A8%EB%93%88  
이번에는? 비밀번호 역시 암호화를 해야함. - bcrypt?  
-- https://velog.io/@jy777hi/Bcrypt-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EC%95%94%ED%98%B8%ED%99%94  
-- https://st-lab.tistory.com/100  
jwt?

##### router

is? ... @sindresorhus/is 로부터 받는데 headertype에 대한 경고? 인 것 같다.  
Router - express, middleWare, service, tokenblacklist..

##### model

UserModel - schema

##### schema (done.)

import { Schema, model } from "mongoose";

##### 설치가 필요한 기능(모듈).

-   비밀번호 암호화
-   아이디 설정
-   is?
-   jwt (보안.. 1단계 : 1차 proj의 초기 mddleware정도로만.)

##### Q.

(router의 is가 필요한 이유?)

##### set.
