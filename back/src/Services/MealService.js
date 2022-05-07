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

	static async findSome({ user_id: id, start, end }) {
		const eatenMenu = await Meal.findSome({ user_id: id, start, end });

		if (eatenMenu.length === 0) {
			const errMessage = '메뉴가 없습니다.';
			return { errMessage };
		}

		return eatenMenu;
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
