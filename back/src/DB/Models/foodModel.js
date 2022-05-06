import { foodModel } from '../Schemas/foodSchema.js';

class Food {
	static async findManyByNutrition([a, b, c, d, e, f]) {
		const foods = await foodModel.find(
			{
				$and: [
					{ carbon: { $gte: a, $lte: d } },
					{ protein: { $gte: b, $lte: e } },
					{ fat: { $gte: c, $lte: f } },
				],
			},
			{ _id: 0, No: 0, recommend: 0, category: 0 },
		);
		return foods;
	}

	static async findManyByNutrition2([a, b, c]) {
		const foods = await foodModel.find(
			{
				$and: [{ carbon: { $lte: a } }, { protein: { $lte: b } }, { fat: { $lte: c } }],
			},
			{ _id: 0, No: 0, recommend: 0, category: 0 },
		);
		return foods;
	}

	static async findFood() {
		return await foodModel.find({ recommend: true });
	}
}

export { Food };
