import mongoose from 'mongoose';
import { User } from './Models/UserModel.js';
import { Meal } from './Models/MealModel.js';
import { Nutrition } from './Models/NutritionModel.js';
import { Recommend_nutrition } from './Models/Recommend_nutritionModel.js';
const URL = process.env.MongoDB_URL || '주소에 접속이 되지 않았습니다.';

mongoose.connect(URL);
const db = mongoose.connection;

db.on('connected', () => {
	console.log('정상적으로 서버에 연결되었습니다.' + URL);
});
db.on('error', error => console.error('MongoDB 연결에 실패하였습니다...\n' + URL + '\n' + error));

// model import 후 export로 Service에 연결하기.
export { User, Meal, Nutrition, Recommend_nutrition };
