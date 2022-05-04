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

	static async findById({ id }) {
		return await UserModel.findOne({ id });
	}

	static async updateUser({ id, fieldToUpdate, newValue }) {
		const filteredById = { id };
		const updateData = { [fieldToUpdate]: newValue };
		const option = { returnOriginal: false };

		const updatedUser = await UserModel.findOneAndUpdate(filteredById, updateData, option);

		return updatedUser;
	}
}

export { User };
