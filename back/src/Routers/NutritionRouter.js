import { Router } from 'express';
import { NutritionService } from '../Services/NutritionService.js';

const nutritionRouter = Router();

nutritionRouter.post('/nutrition', async (req, res, next) => {
	try {
		const { foodList } = req.body;
		const result = [];
		// const eat = [];

        if (!foodList) {
            throw new Error("식사 정보를 입력해주세요.")
        }

        const getFoodList = await NutritionService.getNutritionalFacts({foodName: foodList});

        if (getFoodList.errorMessage) {
            throw new Error(getFoodList.errorMessage);
        }

			//! 여기서부터 만들어야 함!!
			// 1. 먹은 음식이 아닌 추천음식 리스트가 들어가야 함.....
			// 다른 의도로 만든 것일까..?
			// let login = false  //! 로그인 기능을 만든 이후 수정해야함.
			// result = await recommendSystem(Sex, Age, weight, eat, login)

		res.status(200).json(result);
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
