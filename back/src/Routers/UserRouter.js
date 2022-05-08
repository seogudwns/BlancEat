import { Router } from 'express';
import { userService } from '../Services/UserService.js';
import { MealService } from '../Services/MealService.js';
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

		if (loginuser.errMessage) {
			throw new Error(loginuser.errMessage);
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
		const { id } = req.params;
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

// 유저 아이디 받아서 유저 정보 보내주기
userRouter.get('/user/:id', login_required, async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await userService.getUserData({ id });

		if (user.errorMessage) {
			throw new Error(user.errorMessage);
		}

		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
});

//그동안 먹은 음식 정보 보내주기.
userRouter.get('/user/mealdata/:id', login_required, async (req, res, next) => {
	try {
		const { id } = req.params;
		const checkId = req.currentUserId;

		if (id !== checkId) {
			throw new Error('잘못된 토큰입니다.');
		}

		const nutritionData = await MealService.findSomeandSumNutrition({ user_id: id });

		if (nutritionData.errMessage) {
			throw new Error(nutritionData.errMessage);
		}

		res.status(200).json(nutritionData);
	} catch (err) {
		next(err);
	}
});

//음식 삭제 기능 구현.
userRouter.delete('/user/meal/:meal_id', login_required, async (req, res, next) => {
	try {
		const { meal_id } = req.params;
		const deleteRequireFoodList = await MealService.deleteMeal(meal_id);

		if (deleteRequireFoodList.errMessage) {
			throw new Error(deleteRequireFoodList.errMessage);
		}

		res.status(204).send(deleteRequireFoodList.Message);
	} catch (err) {
		next(err);
	}
});

export { userRouter };
