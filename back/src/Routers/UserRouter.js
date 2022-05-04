// is? ... @sindresorhus/is 로부터 받는데 headertype에 대한 경고? 인 것 같다.
// Router - express, middleWare, service, tokenblacklist..
import { Router } from 'express';
import { userService } from '../Services/UserService.js';
import { Meal } from '../DB/index.js';
import { login_required } from '../MiddleWare/login_require.js';
import is from '@sindresorhus/is';

const userRouter = Router();

// 흔적.
userRouter.put('/developer', async (req, res) => {
	res.send('김기동, 김성훈, 배주영, 서형준, 홍일도, 홍주완');
});

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
userRouter.post('/user/login', async (req, res, next) => {
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
		const { updateInfo } = req.body;
		const id = req.params;
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
userRouter.post('/user/mealdata/:id', login_required, async (req, res, next) => {
	try {
		const id = req.params;
		const checkId = req.currentUserId;

		if (id !== checkId) {
			throw new Error('잘못된 토큰입니다.');
		}

		const eatenMenu = await Meal.findAll({ user_id: id });
		if (eatenMenu.length === 0) {
			throw new Error('매뉴가 없습니다.');
		}

		res.status(200).json(eatenMenu);
	} catch (err) {
		next(err);
	}
});

//음식 삭제 기능 구현.
userRouter.delete('/user/meal/:meal_id', login_required, async (req, res, next) => {
	try {
		const { meal_id } = req.body;
		const deleteRequireFoodList = await Meal.deleteOne(meal_id);

		if (!deleteRequireFoodList) {
			throw new Error('해당 음식 리스트가 존재하지 않습니다.');
		}

		res.status(204).send('삭제 완료');
	} catch (err) {
		next(err);
	}
});

export { userRouter };
