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
			type: Number,
			required: true,
		},
		height: {
			type: Number,
		},
		sex: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
);

const UserModel = model('User', UserSchema);

export { UserModel };
