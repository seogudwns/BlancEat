import { recommend_nutritionModel } from '../Schemas/Recommend_nutritionSchema.js';

class Recommend_nutrition {
	static async getinfo({ Age, Sex }) {
		return await recommend_nutritionModel.findOne({ $and: [{ Age }, { Sex }] });
	}
}

export { Recommend_nutrition };
