// is? ... @sindresorhus/is 로부터 받는데 headertype에 대한 경고? 인 것 같다.
// Router - express, middleWare, service, tokenblacklist..
import Router from 'express';

const UserRouter = Router();

// userrouter는 tokencheck를 개별적으로 진행해야 함.

UserRouter.post('login', (req, res) => {
	console.log(1);
});
