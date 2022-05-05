import { Router } from 'express';
import { NutritionService } from '../Services/NutritionService.js';
import { Recommend } from '../modules/RecommendAlgorithm.js';
import { MealService } from '../services/MealService.js';
import { login_required } from '../MiddleWare/login_require.js';

const nutritionRouter = Router();

//! 버튼?...
// 결과를 보는 화면은 연산을 해야하니... data를 뿌려주는 것은 get으로 뿌려버림..
// 저장을 하고싶으면... 저장하기 버튼을 누르면 back에서는 get,post..
// recommendSystem get, post

nutritionRouter.get('/nutrition', async (req, res, next) => {
	try {
		const { age, sex, weight, breakfast, lunch, dinner, snack } = req.query;

		const foodList = [...breakfast, ...lunch, ...dinner, ...snack];

		if (foodList.length == 0) {
			throw new Error('식사 정보를 입력해주세요.');
		} else if (age < 15) {
			throw new Error('현재 15세 미만은 서비스 대상이 아닙니다.');
		}

		const getFoodList = await NutritionService.getNutritionalFacts({ foodName: foodList });

		if (getFoodList.errorMessage) {
			throw new Error(getFoodList.errorMessage);
		}

		const { personInfo, result, errMessage } = await Recommend.recommendSystem(
			age,
			sex,
			weight,
			getFoodList,
		);

		const bundle = { getFoodList, personInfo, result, errMessage };

		res.status(200).json(bundle);
	} catch (error) {
		next(error);
	}
});

nutritionRouter.post('/nutrition', login_required, async (req, res, next) => {
	try {
		const { breakfast, lunch, dinner, snack } = req.body;
		const meals = [breakfast, lunch, dinner, snack];
		const user_id = req.currentUserId;

		// TODO 유저가 만들어진 이후 토큰이 있을 경우 해당 유저의 음식리스트에 등록시간과 아점저 + 간식을 추가시켜줘야 함.

		for (let i = 0; i < meals.length; i++) {
			if (meals[i] == []) {
				continue;
			} else {
				if (i == 0) {
					const time = 'breakfast';
					const foodList = meals[i];
					await MealService.createMealData({ user_id, foodList, time });
				} else if (i == 1) {
					const time = 'lunch';
					const foodList = meals[i];
					await MealService.createMealData({ user_id, foodList, time });
				} else if (i == 2) {
					const time = 'dinner';
					const foodList = meals[i];
					await MealService.createMealData({ user_id, foodList, time });
				} else if (i == 3) {
					const time = 'snack';
					const foodList = meals[i];
					await MealService.createMealData({ user_id, foodList, time });
				}
			}
		}
		res.status(201).send('음식 정보 저장 완료');
	} catch (error) {
		next(error);
	}
});

// 음식검색 알고리즘.
nutritionRouter.get('/nutrition_search/:keyword', async (req, res, next) => {
	try {
		const foodList = await NutritionService.findFoodName({ keyword: req.params.keyword });

		if (foodList.errorMessage) {
			throw new Error(foodList.errorMessage);
		}

		res.status(200).json(foodList);
	} catch (error) {
		next(error);
	}
});

export { nutritionRouter };
