// 알고리즘의 원리 및 구조도는 같은 이름의 md파일로 저장되있습니다. 참고 바랍니다.

// recommend_nutrition 구성요소.
// Age,Sex,protein,fat,carbon,sugar,sugar_limit,fiber,VitA,VitA_limit,VitE,VitE_limit
// VitC,VitC_limit,VitB6,VitB6_limit,Niacin,Niacin_limit,Folate,Folate_limit,Ca,Ca_limit,Na,Na_limit

// 1. Gender, Age, Sex로부터 recomment_nutrition에서 사람 정보 뽑기.
// 2. carbon, protein, fat 계산 후 temp = [] 에 넣기. + 10% 계산해서 temp2 = [] 에 넣기.
// 3. 먹은 음식들로 carbon, protein, fat 추출, nutrient_table 만들기
// 4. nutrient_table =    [[temp[0]+temp2[0],temp[1]+temp2[1],temp[2]+temp2[2]] +
//                      [temp] +
//                      [[temp[0]-temp2[0],temp[1]-temp2[1],temp[2]-temp2[2]] +
//                      [[temp[0]//2,temp[1]//2,temp[2]//2]]

// 이때 각 값에서 -가 나올 가능성이 있으므로 최종적으로 max(0)과 비교.

// 5. async func  ~~~~    { if (nutrient_table[3].reduce((x, y) => x + y) == 0) {result.push =['물']; return result}  // 탄단지 모두 초과량을 먹음.
// 6. else { await find query items.
//
// };
// .
// .
// .
// .
import { Nutrition, Recommend_nutrition } from '../DB/index.js';

class Recommend {
	static async recommendSystem(Age, Sex, Weight, eat, login) {
		let eat_nutrition = [0, 0, 0];
		await eat.map(food => {
			// console.log(food);
			// console.log(food.carbon);
			eat_nutrition[0] += food.carbon;
			eat_nutrition[1] += food.protein;
			eat_nutrition[2] += food.fat;
		});

		let result = [];
		let person_info;
		if (!login) {
			person_info = await Recommend_nutrition.getinfo({ Age, Sex });
			// console.log('personNut =', RecommendNutrition); // 확인용.. done.

			const infoCarbon = await person_info.carbon;
			const infoProtein = await person_info.protein;
			const infoFat = await person_info.fat;

			let temp = [infoCarbon * Weight, infoProtein * Weight, infoFat * Weight];
			let temp2 = [temp[0] / 10, temp[1] / 10, temp[2] / 10];

			temp = [
				temp[0] - eat_nutrition[0],
				temp[1] - eat_nutrition[1],
				temp[2] - eat_nutrition[2],
			];

			const nutrient_table = [
				[temp[0] + temp2[0], temp[1] + temp2[1], temp[2] + temp2[2]],
				temp,
				[temp[0] - temp2[0], temp[1] - temp2[1], temp[2] - temp2[2]],
			];

			let recommend_food;
			let c = false;

			if (nutrient_table[2].reduce((x, y) => x + y) <= 0) {
				console.log('초과량 흡입!');
				recommend_food = [];
				const a = await Nutrition.findFood();

				result.push('충분한 음식을 섭취하셨습니다. 내일 이걸 드셔보시는 것은 어떨까요?');
				result.push(a[parseInt(Math.random() * 22822)]);
				c = true;
			} else {
				// console.log('확인.. ', nutrient_table[2][2], nutrient_table[0][2]);
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
				console.log('최후 음식 길이 =', recommend_food.length);
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);
				//! 처음에 경고 메세지 : '많은 음식을 섭취할 필요가 있는 것 같습니다.' 를 넣고 싶은데..
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);
			}

			// }
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
