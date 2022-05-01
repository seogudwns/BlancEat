// 알고리즘의 원리 및 구조도는 같은 이름의 md파일로 저장되있습니다. 참고 바랍니다.
import { Nutrition, Recommend_nutrition } from '../DB/index.js';

class Recommend {
	static async recommendSystem(Age, Sex, Weight, eat, login) {
		let eat_nutrition = [0, 0, 0];
		await eat.map(food => {
			eat_nutrition[0] += food.carbon;
			eat_nutrition[1] += food.protein;
			eat_nutrition[2] += food.fat;
		});

		let result = [];
		let person_info;
		if (!login) {
			person_info = await Recommend_nutrition.getinfo({ Age, Sex });

			const infoCarbon = await person_info.carbon;
			const infoProtein = await person_info.protein;
			const infoFat = await person_info.fat;

			let temp = [infoCarbon * Weight, infoProtein * Weight, infoFat * Weight];
			let temp2 = [temp[0] / 10, temp[1] / 10, temp[2] / 10];

			temp = [
				Math.max(0, temp[0] - eat_nutrition[0]),
				Math.max(0, temp[1] - eat_nutrition[1]),
				Math.max(0, temp[2] - eat_nutrition[2]),
			];

			const nutrient_table = [
				[
					Math.max(0, temp[0] + temp2[0]),
					Math.max(0, temp[1] + temp2[1]),
					Math.max(0, temp[2] + temp2[2]),
				],
				temp,
				[
					Math.max(0, temp[0] - temp2[0]),
					Math.max(0, temp[1] - temp2[1]),
					Math.max(0, temp[2] - temp2[2]),
				],
			];

			let recommend_food;
			let c = false;

			if (nutrient_table[2].reduce((x, y) => x + y) <= 0) {
				recommend_food = [];
				const a = await Nutrition.findFood();

				result.push('충분한 음식을 섭취하셨습니다. 내일 이걸 드셔보시는 것은 어떨까요?');
				result.push(a[parseInt(Math.random() * a.length)]);
				c = true;
			} else {
				recommend_food = await Nutrition.findManyByNutrition([
					nutrient_table[2][0],
					nutrient_table[2][1],
					nutrient_table[2][2],
					nutrient_table[1][0],
					nutrient_table[1][1],
					nutrient_table[1][2],
				]);
				console.log('leng =', recommend_food.length);
			}

			if (c == true) {
			} else if (recommend_food.length > 0) {
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);
				c = true;
			} else {
				recommend_food = await Nutrition.findManyByNutrition([
					nutrient_table[2][0],
					nutrient_table[2][1],
					nutrient_table[2][2],
					nutrient_table[0][0],
					nutrient_table[0][1],
					nutrient_table[0][2],
				]);
				console.log('leng2 = ', recommend_food.length);
			}

			if (c == true) {
			} else if (recommend_food.length > 0) {
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);
			} else {
				recommend_food = await Nutrition.findManyByNutrition2([
					nutrient_table[0][0],
					nutrient_table[0][1],
					nutrient_table[0][2],
				]);
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);
				//! 처음에 경고 메세지 : '영양소 섭취가 매우 부족합니다. 많은 음식을 섭취할 필요가 있는 것 같습니다.' 를 넣고 싶은데..
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);
			}
		} else {
			// const userInfo = await UserModel.findById({ User_id: login });
			console.log('로그인 후 사용가능한 기능입니다.');
			const ErrorMessage = '로그인 기능 아직 없음. 나오면 이상한거임.';
			return ErrorMessage;
		}

		console.log(result);

		return { person_info, result };
	}
}
export { Recommend };
