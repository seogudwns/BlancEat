// is? ... @sindresorhus/is 로부터 받는데 headertype에 대한 경고? 인 것 같다.
// Router - express, middleWare, service, tokenblacklist..
import { Router } from 'express';
import { userService } from '../Services/UserService.js';
import { Meal } from '../DB/index.js';
import { login_required } from '../MiddleWare/login_require.js';
import is from '@sindresorhus/is';

const userRouter = Router();

// 아이디 등록.. done
userRouter.post('/user/register', async (req, res, next) => {
	try {
		if (is.emptyObject(req.body)) {
			throw new Error('headers의 Content-Type을 application/json으로 설정해주세요');
		}

		const { nickName, email, password, checkPassword, age, weight, sex } = req.body;

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

// 로그인.. done
userRouter.get('/user/login', async (req, res, next) => {
	try {
		const { email, password } = req.body;

		const loginuser = await userService.getUser({ email, password });

		// null일 경우 false와 같음.
		if (loginuser.errMessage) {
			throw new Error(errMessage);
		}

		res.status(200).json(loginuser);
	} catch (err) {
		next(err);
	}
});

// 정보 변경.. done.
userRouter.put('/user/infoexchange/:id', login_required, async (req, res, next) => {
	try {
		const { id, updateInfo } = req.body;
		const checkId = req.currentUserId;
		const changeUser = await userService.setUser(id, {
			checkId,
			updateInfo,
		});

		if (changeUser.errMessage) {
			throw new Error(changeUser.errMessage);
		}

		res.status(200).json(changeUser);
	} catch (err) {
		next(err);
	}
});

//! NutritionRouter에 recommend는 어떻게 하지..?..

//그동안 먹은 음식 정보 보내주기.
userRouter.post('/user/mealdata', login_required, async (req, res, next) => {
	try {
		console.log(1);
	} catch (err) {
		next(err);
	}
});

//음식 정보로부터 모든 영양소 합 보내주기... //! db에서 음식 정보가 삭제될 수도 있을까?..
userRouter.get('/user/:meal_id', login_required, async (req, res, next) => {
	try {
		console.log(1);
	} catch (err) {
		next(err);
	}
});

export { userRouter };
