// 라우터에서 내려온 comp를 작동, DB
// 아이디를 설정해줄 모듈(first_proj에서는 uuid의 v4라는 것을 사용함.) 이번에는?
// 비밀번호 역시 암호화를 해야함. - bcrypt?
// jwt?

// addUser
import { User } from '../DB/index.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

class userService {
	static async addUser({ nickName, email, password, age, weight, sex }) {
		const user = await UserModel.checkUserIdbyemail({ email });

		if (user) {
			const errMessage = '아이디가 존재하는 이메일입니다.';
			return { errMessage };
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const id = uuidv4();

		const newUser = await User.createUserId({
			id,
			nickName,
			email,
			age,
			weight,
			sex,
			password: hashedPassword,
		});

		return newUser;
	}

	static async getUser({ email, password }) {
		console.log(1);
	}
}

export { userService };
