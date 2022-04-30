import { Router } from 'express';
import { NutritionService } from '../Services/NutritionService.js';
import { Recommend } from '../modules/RecommendAlgorithm.js';

const nutritionRouter = Router();

nutritionRouter.post('/nutrition', async (req, res, next) => {
	try {
		const { Age, Sex, Weight, foodList } = req.body;

		if (foodList.length == 0) {
			throw new Error('식사 정보를 입력해주세요.');
		}

		const getFoodList = await NutritionService.getNutritionalFacts({ foodName: foodList });

		if (getFoodList.errorMessage) {
			throw new Error(getFoodList.errorMessage);
		}

		// 영양성분을 6가지 항목으로 분류해 더하기
		const nutrition = getFoodList.map(food => {
			return {
				열량: food.energy,
				탄수화물: food.carbon,
				단백질: food.protein,
				지방: food.fat,
				'당/식이섬유': food.sugar + food.fiber,
				무기염류: food.Ca + food.fe + food.na + food.zn + food.folate,
				비타민: food.vitA + food.niacin + food.vitE + food.vitC + food.vitB6,
			};
		});

		// 각 음식의 영양성분끼리 더하기
		const nutritionSum = nutrition.reduce((prev, curr) => {
			return {
				열량: Math.round((prev['열량'] + curr['열량']) * 100) / 100,
				탄수화물: Math.round((prev['탄수화물'] + curr['탄수화물']) * 100) / 100,
				단백질: Math.round((prev['단백질'] + curr['단백질']) * 100) / 100,
				지방: Math.round((prev['지방'] + curr['지방']) * 100) / 100,
				'당/식이섬유': Math.round((prev['당/식이섬유'] + curr['당/식이섬유']) * 100) / 100,
				무기염류: Math.round((prev['무기염류'] + curr['무기염류']) * 100) / 100,
				비타민: Math.round((prev['비타민'] + curr['비타민']) * 100) / 100,
			};
		});

		let login = false; //! 로그인 기능을 만든 이후 수정해야함.
		const { person_info, result } = await Recommend.recommendSystem(
			Age,
			Sex,
			Weight,
			getFoodList,
			login,
		);

		// Age, Sex, Weight --> 사람 일일 섭취량. 넣자!
		// eat_result = 먹은음식의 각각의 영양소의 sum. , person_info, result = { [추천음식1], [추천음식2]} .... Done: person_info, result.
		const bundle = { nutritionSum, person_info, result };
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
