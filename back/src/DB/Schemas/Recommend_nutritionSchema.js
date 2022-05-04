import pkg from 'mongoose';

const { Schema, model } = pkg;

const Recommend_nutritionSchema = new Schema({
	ageRange: {
		type: String,
		required: true,
	},
	sex: {
		type: String,
		required: true,
	},
	protein: {
		type: String,
	},
	fat: {
		type: Number,
	},
	carbon: {
		type: Number,
	},
	sugar: {
		type: Number,
	},
	sugar_limit: {
		type: Number,
	},
	fiber: {
		type: Number,
	},
	VitA: {
		type: Number,
	},
	VitA_limit: {
		type: Number,
	},
	VitE: {
		type: Number,
	},
	VitE_limit: {
		type: Number,
	},
	VitC: {
		type: Number,
	},
	VitC_limit: {
		type: Number,
	},
	VitB6: {
		type: Number,
	},
	VitB6_limit: {
		type: Number,
	},
	Niacin: {
		type: Number,
	},
	Niacin_limit: {
		type: Number,
	},
	Folate: {
		type: Number,
	},
	Folate_limit: {
		type: Number,
	},
	VitE: {
		type: Number,
	},
	Ca: {
		type: Number,
	},
	Ca_limit: {
		type: Number,
	},
	Na: {
		type: Number,
	},
	Na_limit: {
		type: Number,
	},
});

const recommend_nutritionModel = model('Recommend_nutrition', Recommend_nutritionSchema);

export { recommend_nutritionModel };
