import { nutritionModel } from '../Schemas/NutritionSchema.js';

class Nutrition {
	// 음식 하나만 가져오기
	static async findOneByName({ foodName }) {
		return await nutritionModel.findOne({ foodName });
	}

	// 음식 여러개 한번에 가져오기
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

	// 음식 검색어 추천
	static async findNameByKeyword({ keyword }) {
		const foodName = await nutritionModel.find(
			{ foodName: { $regex: keyword } },
			{ foodName: 1 },
		);
		return foodName;
	}

	static async findManyByNutrition([a, b, c, d, e, f]) {
		const foods = await nutritionModel.find(
			{
				$and: [
					{ carbon: { $gte: a, $lte: d } },
					{ protein: { $gte: b, $lte: e } },
					{ fat: { $gte: c, $lte: f } },
					{ recommend: true },
				],
			},
			{ _id: 0, No: 0, recommend: 0, category: 0 },
		);
		return foods;
	}

	static async findManyByNutrition2([a, b, c]) {
		const foods = await nutritionModel.find(
			{
				$and: [
					{ carbon: { $lte: a } },
					{ protein: { $lte: b } },
					{ fat: { $lte: c } },
					{ recommend: true },
				],
			},
			{ _id: 0, No: 0, recommend: 0, category: 0 },
		);
		return foods;
	}

	static async findFood() {
		return await nutritionModel.find({ recommend: true });
	}
}

export { Nutrition };
