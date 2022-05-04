import pkg from 'mongoose';

const { Schema, model } = pkg;
// 닉네임, 이메일, 비밀번호, 나이, 몸무게, 성별
const UserSchema = new Schema(
	{
		id: {
			type: String,
			required: true,
		},
		nickName: {
			type: String,
			required: false,
			default: 'Anonymous',
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		weight: {
			type: String,
			required: true,
		},
		sex: {
			type: String,
			required: true,
		},
		mealPlan: {
			type: Array,
			required: false,
			default: [],
		},
		mealPlanTime: {
			type: Array,
			required: false,
			default: [],
		},
	},
	{ timestamps: true },
);

const UserModel = model('User', UserSchema);

export { UserModel };
