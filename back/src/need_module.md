##### service.

라우터에서 내려온 comp를 작동, DB  
아이디를 설정해줄 모듈(first_proj에서는 uuid의 v4라는 것을 사용함.)  
이번에는? 비밀번호 역시 암호화를 해야함. - bcrypt?  
jwt?

##### router

is? ... @sindresorhus/is 로부터 받는데 headertype에 대한 경고? 인 것 같다.  
Router - express, middleWare, service, tokenblacklist..

##### model

UserModel - schema

##### schema

import { Schema, model } from "mongoose";

##### 설치가 필요한 기능(모듈).

-   비밀번호 암호화
-   아이디 설정
-   is?
-   jwt?

##### Q

(router의 is가 필요한 이유?)  
보안... 할까?(만약 한다면 jwt?)
