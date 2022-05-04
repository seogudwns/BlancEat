import pkg from 'mongoose';

const { Schema, model } = pkg;

const MealSchema = new Schema(
	{
		user_id: {
			type: String,
			required: true,
		},
		meal_time: {
			type: String,
			required: true,
		},
		foodList: {
			type: Array,
			required: true,
		},
	},
	{ timestamps: true },
);

const MealModel = model('Meal', MealSchema);

export { MealModel };
