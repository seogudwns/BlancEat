// is? ... @sindresorhus/is 로부터 받는데 headertype에 대한 경고? 인 것 같다.
// Router - express, middleWare, service, tokenblacklist..
import { Router } from 'express';
import { userService } from '../Services/UserService';
import is from '@sindresorhus/is';

const userRouter = Router();

// 아이디 등록.
userRouter.post('/user/register', async (req, res, next) => {
	try {
		if (is.emptyObject(req.body)) {
			throw new Error('headers의 Content-Type을 application/json으로 설정해주세요');
		}

		const { nickName, email, password, checkPassword, age, weight, sex } = req.body;
		// 닉네임, 이메일, 비밀번호(비밀번호 확인), 나이, 몸무게, 성별

		if (password !== checkPassword) {
			throw new Error('비밀번호가 일치하지 않습니다.');
		}

		const newUser = await userService.addUser({
			nickName,
			email,
			password,
			age,
			weight,
			sex,
		});

		if (newUser.errMessage) {
			throw new Error(newUser.errMessage);
		}

		res.status(201).json(newUser);
	} catch (error) {
		next(error);
	}
});

userRouter.post('/user/login', async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const user = await userService.getUser({ email, password });

		if (user.errMessage) {
			throw new Error(errMessage);
		}

		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
});
