import personModel from './Schemas/PersonSchema';

class Person {
	static async getinfo({ age, Sex }) {
		return personModel.findOne({ age, Sex });
	}
}

export { Person };
