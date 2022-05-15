import { nutritionModel } from '../Schemas/NutritionSchema.js';

class Nutrition {
	// 음식 하나만 가져오기.
	static async findOneByName({ foodName }) {
		return await nutritionModel.findOne({ foodName });
	}

	// 음식 여러개 한번에 가져오기.
	static async findManyByName({ foodName }) {
		return await nutritionModel.find(
			{ foodName: { $in: foodName } },
			{
				_id: 0,
				No: 0,
				recommend: 0,
				category: 0,
				photo: 0,
			},
		);
	}

	// 음식 검색어 추천.
	static async findNameByKeyword({ keyword }) {
		const foodName = await nutritionModel
			.find({ foodName: { $regex: keyword } }, { foodName: 1 })
			.limit(10)
			.lean();
		return foodName;
	}
}

export { Nutrition };
