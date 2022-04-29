import { personModel } from '../Schemas/PersonSchema.js';

class Person {
	static async getinfo({ Age, Sex }) {
		return personModel.findOne({ Age, Sex });
	}
}

export { Person };
