import { MealModel } from '../Schemas/MealSchema.js';

class Meal {
	static async addMeal({ user_id, foodList, time }) {
		return await MealModel.create({ user_id, foodList, meal_time: time });
	}

	static async findAll({ user_id }) {
		return await MealModel.find({ user_id });
	}

	static async findSome({ user_id, time, timestamps }) {
		return await MealModel.find({ user_id, meal_time: time }, { timestamps });
	}

	static async deleteOne(meal_id) {
		return await MealModel.findOneAndDelete({ id: meal_id });
	}
}

export { Meal };
