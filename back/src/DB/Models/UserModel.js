import UserModel from '../Schemas/UserSchema';

class User {
	static async createUserId({ id, nickName, email, age, weight, sex, password }) {
		return await UserModel.create({ id, nickName, email, age, weight, sex, password });
	}

	static async checkUserIdbyemail({ email }) {
		return await UserModel.find({ email });
	}
}

export { User };
