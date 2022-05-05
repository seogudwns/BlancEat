import { Nutrition } from '../DB/index.js';

class NutritionService {
	static async getNutritionalFact({ foodName }) {
		const findFood = await Nutrition.findOneByName({ foodName });

		if (!findFood) {
			const errorMessage = '해당 음식을 찾을 수 없습니다. 다시 한번 확인해주세요.';
			return { errorMessage };
		}

		return findFood;
	}

	static async getNutritionalFacts({ foodName }) {
		const findFoods = await Nutrition.findManyByName({ foodName });

		if (!findFoods) {
			const errorMessage = '해당 음식을 찾을 수 없습니다. 다시 한번 확인해주세요.';
			return { errorMessage };
		}

		return findFoods;
	}

	static async findFoodName({ keyword }) {
		const foodList = await Nutrition.findNameByKeyword({ keyword });

		if (foodList.length === 0) {
			const errorMessage =
				'해당 키워드가 포함된 음식을 찾을 수 없습니다. 다시 한번 확인해주세요.';
			return { errorMessage };
		}

		return foodList;
	}
}

export { NutritionService };
