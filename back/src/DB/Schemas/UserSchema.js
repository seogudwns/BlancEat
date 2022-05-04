import pkg from 'mongoose';

const { Schema, model } = pkg;

const UserSchema = new Schema(
	{
		nickName: {
			type: String,
			required: false,
			default: 'Anonymous',
		},
		user_id: {
			type: String,
			required: true,
		},
		gender: {
			type: Number, //* 0과 1로.. 0일때는 남자, 1일때는 여자. 이 값은 실재 서비스를 시작하기 직전까지 변경 가능.
			required: true,
		},
		weight: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true },
);

const UserModel = model('User', UserSchema);

export { UserModel };
