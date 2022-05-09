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

	static async getNutrient({ foodName }) {
		const findFoods = await Nutrition.findManyByName({ foodName });

		if (!findFoods) {
			const errorMessage = '해당 음식을 찾을 수 없습니다. 다시 한번 확인해주세요.';
			return { errorMessage };
		}

		const nutrient = findFoods.map(food => {
			return {
				탄수화물: food.carbon,
				단백질: food.protein,
				지방: food.fat,
			};
		});

		const nutrientSum = nutrient.reduce((prev, curr) => {
			return {
				탄수화물: prev['탄수화물'] + curr['탄수화물'],
				단백질: prev['단백질'] + curr['단백질'],
				지방: prev['지방'] + curr['지방'],
			};
		});
		return nutrientSum;
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
