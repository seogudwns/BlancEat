// 알고리즘의 원리 및 구조도는 같은 이름의 md파일로 저장되있습니다. 참고 바랍니다.
import { Recommend_nutrition, Food } from '../DB/index.js';

class Recommend {
	static async recommendSystem(age, sex, weight, eat) {
		let eatNutrition = [0, 0, 0];
		eat.forEach(food => {
			eatNutrition[0] += food.carbon;
			eatNutrition[1] += food.protein;
			eatNutrition[2] += food.fat;
		});

		let ageRange;
		if (age >= 15 && age <= 18) {
			ageRange = '15-18';
		} else if (age >= 19 && age <= 29) {
			ageRange = '19-29';
		} else if (age >= 30 && age <= 49) {
			ageRange = '30-49';
		} else if (age >= 50 && age <= 64) {
			ageRange = '50-64';
		} else if (age >= 65 && age <= 74) {
			ageRange = '65-74';
		} else if (age >= 75) {
			ageRange = '>75';
		}

		let result = [];

		const personInfo = await Recommend_nutrition.getinfo({ ageRange, sex });

		let person3Nut = [
			personInfo.carbon * weight,
			personInfo.protein * weight,
			personInfo.fat * weight,
		];
		const nutBound = [person3Nut[0] / 10, person3Nut[1] / 10, person3Nut[2] / 10];

		person3Nut = [
			Math.max(0, person3Nut[0] - eatNutrition[0]),
			Math.max(0, person3Nut[1] - eatNutrition[1]),
			Math.max(0, person3Nut[2] - eatNutrition[2]),
		];

		const nutrientTable = [
			[
				Math.max(0, person3Nut[0] + nutBound[0]),
				Math.max(0, person3Nut[1] + nutBound[1]),
				Math.max(0, person3Nut[2] + nutBound[2]),
			],
			person3Nut,
			[
				Math.max(0, person3Nut[0] - nutBound[0]),
				Math.max(0, person3Nut[1] - nutBound[1]),
				Math.max(0, person3Nut[2] - nutBound[2]),
			],
		];

		let recommendFood = [];
		let isResult = false;
		let errMessage = null;

		if (nutrientTable[2].reduce((x, y) => x + y) <= 0) {
			const randomFood = await Food.findFood();

			errMessage = '충분한 음식을 섭취하셨습니다. 내일 이걸 드셔보시는 것은 어떨까요?';
			result.push(randomFood[parseInt(Math.random() * randomFood.length)]);
			result.push(randomFood[parseInt(Math.random() * randomFood.length)]);
			result.push(randomFood[parseInt(Math.random() * randomFood.length)]);
			isResult = true;
		} else {
			recommendFood = await Food.findManyByNutrition([
				nutrientTable[2][0],
				nutrientTable[2][1],
				nutrientTable[2][2],
				nutrientTable[1][0],
				nutrientTable[1][1],
				nutrientTable[1][2],
			]);
		}

		if (isResult === true) {
		} else if (recommendFood.length > 1) {
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
			isResult = true;
		} else {
			recommendFood = await Food.findManyByNutrition([
				nutrientTable[2][0],
				nutrientTable[2][1],
				nutrientTable[2][2],
				nutrientTable[0][0],
				nutrientTable[0][1],
				nutrientTable[0][2],
			]);
		}

		if (isResult === true) {
		} else if (recommendFood.length > 1) {
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
		} else {
			recommendFood = await Food.findManyByNutrition2([
				nutrientTable[0][0],
				nutrientTable[0][1],
				nutrientTable[0][2],
			]);
			errMessage =
				'영양소 섭취가 매우 부족합니다. 많은 음식을 섭취할 필요가 있는 것 같습니다.';
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
			result.push(recommendFood[parseInt(Math.random() * recommendFood.length)]);
		}

		return { personInfo, result, errMessage };
	}
}
export { Recommend };
