import { Router } from 'express';
import { NutritionService } from '../Services/NutritionService.js';
import { Recommend } from '../modules/RecommendAlgorithm.js';

const nutritionRouter = Router();

nutritionRouter.post('/nutrition', async (req, res, next) => {
	try {
		const { Sex, Age, Weight, foodList } = req.body;
		// console.log(foodList);
		// const result = [];
		let result;
		const eat = [];

		if (!foodList) {
			throw new Error('식사 정보를 입력해주세요.');
		} else {
			let getFoodList;

			for (let i = 0; i < foodList.length; i++) {
				getFoodList = await NutritionService.getNutritionalFact({ foodName: foodList[i] });
				eat.push(getFoodList);
			}

			if (getFoodList.errorMessage) {
				throw new Error(getFoodList.errorMessage);
			}

			// result에는 추천음식의 list들이 들어갈 예정.
			let login = false; //! 로그인 기능을 만든 이후 수정해야함.
			result = await Recommend.recommendSystem(Sex, Age, Weight, eat, login);
		}

		const bundle = { eat, result };
		res.status(200).json(bundle);
	} catch (error) {
		next(error);
	}
});

// 음식검색 알고리즘.
nutritionRouter.get('/nutrition_search/:keyword', async function (req, res, next) {
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
