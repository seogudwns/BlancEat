import { Meal } from '../DB/index.js';

class MealService {
	static async createMealData({ user_id, foodList, time }) {
		const meal = await Meal.addMeal({ user_id, foodList, time });

		if (!meal) {
			const errorMessage =
				'사용자의 식사 정보 생성에 실패하였습니다. 다시 한 번 확인해주세요.';
			return { errorMessage };
		}

		return meal;
	}
}

export { MealService };
