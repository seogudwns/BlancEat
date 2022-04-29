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
import { Nutrition, Person } from '../DB/index.js';

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
		if (!login) {
			const personNutriant = await Person.getinfo({ Age, Sex });
			console.log('personNut =', personNutriant);
			//! 검색이 안됨.
			const infoCarbon = await personNutriant.carbon;
			const infoProtein = await personNutriant.protein;
			const infoFat = await personNutriant.fat;

			let temp = [infoCarbon * Weight, infoProtein * Weight, infoFat * Weight];
			let temp2 = [temp[0] / 10, temp[1] / 10, temp[2] / 10];

			temp = [
				temp[0] - eat_nutrition[0],
				temp[1] - eat_nutrition[1],
				temp[2] - eat_nutrition[2],
			];

			const nutrient_table2 = [
				[temp[0] + temp2[0], temp[1] + temp2[1], temp[2] + temp2[2]],
				temp,
				[temp[0] - temp2[0], temp[1] - temp2[1], temp[2] - temp2[2]],
				[temp[0] / 2, temp[1] / 2, temp[2] / 2],
			];

			let nutrient_table = [...nutrient_table2];
			// 뭐든 더먹으면 초과량일 경우 물 원툴.
			let recommend_food;
			if (nutrient_table[3].reduce((x, y) => x + y) == 0) {
				result.push = ['이미 정량을 다 채우셨습니다. 다른 음식을 추천?']; //TODO index로 추첨.
				return result;
			} else {
				recommend_food = await Nutrition.findManyByNutrition([
					nutrient_table[2][1],
					nutrient_table[2][2],
					nutrient_table[2][3],
					nutrient_table[1][1],
					nutrient_table[1][2],
					nutrient_table[1][3],
				]);
			}

			if (recommend_food) {
				result.push(recommend_food[parseInt((Math.random() + 1) * recommend_food.length)]);

				return result;
			} else {
				recommend_food = await Nutrition.findManyByNutrition([
					nutrient_table[2][1],
					nutrient_table[2][2],
					nutrient_table[2][3],
					nutrient_table[0][1],
					nutrient_table[0][2],
					nutrient_table[0][3],
				]);
			}

			if (recommend_food) {
				result.push(recommend_food[parseInt(Math.random() * recommend_food.length)]);

				return result;
			} else {
				recommend_food = await Nutrition.findManyByNutrition([
					nutrient_table[0][1],
					nutrient_table[0][2],
					nutrient_table[0][3],
				]);
				temp_food = recommend_food[parseInt(Math.random() * recommend_food.length)];
				result.push([temp_food]);
			}

			// }
		} else {
			// const userInfo = await UserModel.findById({ User_id: login });
			console.log('로그인 후 사용가능한 기능입니다.');
			const ErrorMessage = '로그인 기능 아직 없음. 나오면 이상한거임.';
			return ErrorMessage;
		}

		return { result, person_info };
	}
}
export { Recommend };
