import { UserModel } from '../Schemas/UserSchema.js';

class User {
	static async createUserId({ id, nickName, email, age, weight, sex, password }) {
		return await UserModel.create({ id, nickName, email, age, weight, sex, password });
	}

	static async checkUserIdbyemail({ email }) {
		return await UserModel.find({ email });
	}

	static async findByEmail({ email }) {
		return await UserModel.findOne({ email });
	}
}

export { User };
