import { nutritionModel } from '../Schemas/NutritionSchema.js'

class Nutrition{
    // 음식 하나만 가져오기
    static async findOneByName({ foodName }) {
        console.log(foodName);
        return await nutritionModel.findOne({ foodName });
    }

    // 음식 여러개 한번에 가져오기
    static async findManyByName({ foodName }) {
        console.log(foodName);
        return await nutritionModel.find({'foodName': { $in: foodName }});
    }

    // 음식 검색어 추천
    static async findNameByKeyword({ keyword }) {
        const foodName = await nutritionModel.find({'foodName': { $regex: keyword }}, {'foodName': 1});
        return foodName;
    }
}

export { Nutrition };