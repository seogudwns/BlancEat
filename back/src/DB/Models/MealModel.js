import { MealModel } from '../Schemas/MealSchema.js';

class Meal{
    static async createMeal({ user_id, meal_time, foodList }) {
        return await MealModel.create({ user_id, meal_time, foodList });
    }
}

export { Meal };