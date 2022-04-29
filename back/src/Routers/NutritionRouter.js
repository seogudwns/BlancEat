import { Router } from 'express';
import { NutritionService } from '../Services/NutritionService.js';
import { Recommend } from '../modules/RecommendAlgorithm.js';

const nutritionRouter = Router();

nutritionRouter.post('/nutrition', async (req, res, next) => {
	try {
		const { Age, Sex, Weight, foodList } = req.body;

		let getFoodList;
		const eat = [];

		if (!foodList) {
			throw new Error('식사 정보를 입력해주세요.');
		} else {
			for (let i = 0; i < foodList.length; i++) {
				getFoodList = await NutritionService.getNutritionalFact({
					foodName: foodList[i],
				});
				eat.push(getFoodList);
			}

			if (getFoodList.errorMessage) {
				throw new Error(getFoodList.errorMessage);
			}
			// eat 다 계산해서? 개별정보가 필요 없으니 sum을 해서 보내자.(O) --> 주영님.
			// result에는 추천음식의 list들이 들어갈 예정.
		}
		let login = false; //! 로그인 기능을 만든 이후 수정해야함.
		const { person_info, result } = await Recommend.recommendSystem(
			Age,
			Sex,
			Weight,
			eat,
			login,
		);

		// Age, Sex, Weight --> 사람 일일 섭취량. 넣자!
		// eat_result = 먹은음식의 각각의 영양소의 sum. , person_info, result = { [추천음식1], [추천음식2]} .... Done: person_info,
		const bundle = { eat, person_info, result };
		res.status(200).json(bundle);
		// res.status(200).send(eat);
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
