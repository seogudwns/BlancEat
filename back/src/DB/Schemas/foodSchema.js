import pkg from 'mongoose';

const { Schema, model } = pkg;

const foodSchema = new Schema({
	foodName: {
		type: String,
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
	Cal: {
		type: Number,
		required: true,
	},
	Protein: {
		type: Number,
		required: true,
	},
	Fat: {
		type: Number,
		required: true,
	},
	Carbon: {
		type: Number,
		required: true,
	},
	Sugar: {
		type: Number,
		required: true,
	},
	Fiber: {
		type: Number,
		default: 0,
	},
	Ca: {
		type: Number,
		default: 0,
	},
	VitA: {
		type: Number,
		default: 0,
	},
	Fe: {
		type: Number,
		default: 0,
	},
	Na: {
		type: Number,
		default: 0,
	},
	Zn: {
		type: Number,
		default: 0,
	},
	Niacin: {
		type: Number,
		default: 0,
	},
	VitE: {
		type: Number,
		default: 0,
	},
	VitC: {
		type: Number,
		default: 0,
	},
	Folate: {
		type: Number,
		default: 0,
	},
	VitB6: {
		type: Number,
		default: 0,
	},
});

const foodModel = model('Food', foodSchema);

export { foodModel };
