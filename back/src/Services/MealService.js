import { endOfDay, startOfDay } from 'date-fns';
import { Meal } from '../DB/index.js';
import { NutritionService } from './NutritionService.js';
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

	static async findSomeandSumNutrition({ user_id: id }) {
		const now = new Date();
		const start = startOfDay(now);
		const end = endOfDay(now);

		const eatenMenu = await Meal.findSome({ user_id: id, start, end });

		if (eatenMenu.length === 0) {
			const errMessage = '메뉴가 없습니다.';
			return { errMessage };
		}

		const todayMeals = eatenMenu.reduce((prev, curr) => {
			prev.foodList = prev.foodList.concat(curr.foodList);
			return prev;
		});

		const nutritionData = await NutritionService.getNutrient({
			foodName: todayMeals.foodList,
		});

		return nutritionData;
	}

	static async deleteMeal(meal_id) {
		const deleteOne = await Meal.deleteOne(meal_id);

		if (!deleteOne) {
			const errMessage = '해당 음식 리스트가 존재하지 않습니다.';
			return { errMessage };
		}

		const Message = '삭제 완료';
		return { Message };
	}
}

export { MealService };
