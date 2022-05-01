import { Router } from 'express';
import { NutritionService } from '../Services/NutritionService.js';
import { Recommend } from '../modules/RecommendAlgorithm.js';

const nutritionRouter = Router();

// recommendSystem
nutritionRouter.post('/nutrition', async (req, res, next) => {
	try {
		const { age, sex, weight, foodList } = req.body;

		if (foodList.length == 0) {
			throw new Error('식사 정보를 입력해주세요.');
		} else if (age < 15) {
			throw new Error('현재 15세 미만은 서비스 대상이 아닙니다.');
		}

		const getFoodList = await NutritionService.getNutritionalFacts({ foodName: foodList });

		if (getFoodList.errorMessage) {
			throw new Error(getFoodList.errorMessage);
		}

		let isLogin = false; //! 로그인 기능을 만든 이후 수정해야함.
		const { personInfo, result } = await Recommend.recommendSystem(
			age,
			sex,
			weight,
			getFoodList,
			isLogin,
		);

		const bundle = { getFoodList, personInfo, result };
		res.status(200).json(bundle);
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
