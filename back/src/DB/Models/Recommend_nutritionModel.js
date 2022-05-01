import { recommend_nutritionModel } from '../Schemas/Recommend_nutritionSchema.js';

class Recommend_nutrition {
	static async getinfo({ ageRange, sex }) {
		return await recommend_nutritionModel.findOne({ $and: [{ ageRange }, { sex }] });
	}
}

export { Recommend_nutrition };
