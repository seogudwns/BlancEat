import { personModel } from '../Schemas/PersonSchema.js';

class Person {
	static async getinfo({ Age, Sex }) {
		// return personModel.findOne({ $and: [{ Age }, { Sex }] });
		return personModel.find({});
	}
}

export { Person };
