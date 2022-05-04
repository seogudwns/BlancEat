import { Meal } from '../DB/index.js';

class MealService {
    static async createMealData({ user_id, meal_time, foodList }) {
        const meal = await Meal.createMeal({ user_id, meal_time, foodList });

        if (!meal) {
            const errorMessage = "사용자의 식사 정보 생성에 실패하였습니다. 다시 한 번 확인해주세요.";
            return { errorMessage };
        }

        return meal;
    }
}

export { MealService };