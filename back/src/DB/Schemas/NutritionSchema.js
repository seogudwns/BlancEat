import pkg from 'mongoose';

const { Schema, model } = pkg;

const nutritionSchema = new Schema({
	// id: {
	//   type: ObjectId,
	//   required: true,
	// },
	foodName: {
		type: String,
		required: true,
	},
	recommend: {
		type: Boolean,
		required: true,
	},
	weight: {
		type: Number,
		required: true,
	},
	unit: {
		type: String,
		required: true,
	},
	energy: {
		type: Number,
		required: true,
	},
	protein: {
		type: Number,
		required: true,
	},
	fat: {
		type: Number,
		required: true,
	},
	carbon: {
		type: Number,
		required: true,
	},
	sugar: {
		type: Number,
		required: true,
	},
	fiber: {
		type: Number,
		default: 0,
	},
	Ca: {
		type: Number,
		default: 0,
	},
	vitA: {
		type: Number,
		default: 0,
	},
	fe: {
		type: Number,
		default: 0,
	},
	na: {
		type: Number,
		default: 0,
	},
	zn: {
		type: Number,
		default: 0,
	},
	niacin: {
		type: Number,
		default: 0,
	},
	vitE: {
		type: Number,
		default: 0,
	},
	vitC: {
		type: Number,
		default: 0,
	},
	folate: {
		type: Number,
		default: 0,
	},
	vitB6: {
		type: Number,
		default: 0,
	},
});

const nutritionModel = model('Nutrition', nutritionSchema);

export { nutritionModel };
