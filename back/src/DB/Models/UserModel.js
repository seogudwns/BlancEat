import UserModel from '../Schemas/UserSchema';

class User {
	static async createUserId({ user_id, gender, age, weight }) {
		return await UserModel.create({ user_id, gender, age, weight });
	}
}

export { User };
