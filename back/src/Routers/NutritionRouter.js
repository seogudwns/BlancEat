import { Router } from 'express';
import { NutritionService } from '../Services/NutritionService.js';
import { Recommend } from '../modules/RecommendAlgorithm.js';
import { MealService } from '../Services/MealService.js';
import { login_required } from '../MiddleWare/login_require.js';

const nutritionRouter = Router();

// 빈 배열인지 확인하는 함수.
function isEmptyArr(array) {
	if (Array.isArray(array) && array.length === 0) {
		return true;
	}
	return false;
}

nutritionRouter.get('/nutrition', async (req, res, next) => {
	try {
		const { age, sex, weight, breakfast, lunch, dinner, snack } = req.query;

		const foodList = [...breakfast, ...lunch, ...dinner, ...snack];

		if (isEmptyArr(foodList)) {
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

// 로그인 유저 음식 추천 및 식사 정보 저장.
nutritionRouter.post('/nutrition', login_required, async (req, res, next) => {
	try {
		const { age, sex, weight, breakfast, lunch, dinner, snack } = req.body;
		const meals = [breakfast, lunch, dinner, snack];
		const user_id = req.currentUserId;

		const foodList = [...breakfast, ...lunch, ...dinner, ...snack];

		// foodList.length로 체크하지 않은 이유는?..
		if (isEmptyArr(foodList)) {
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

		// 이것도 옮겨야 하는데 시간이 없..ㅠ
		for (let i = 0; i < meals.length; i++) {
			if (isEmptyArr(meals[i])) {
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

		res.status(201).json(bundle);
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
