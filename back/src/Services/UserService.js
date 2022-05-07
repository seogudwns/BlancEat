import { User } from '../DB/index.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

class userService {
	static async addUser({ nickName, email, password, age, weight, sex }) {
		const user = await User.checkUserIdbyemail({ email });

		if (user.length > 0) {
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
		const user = await User.findByEmail({ email });

		if (!user) {
			const errMessage =
				'해당 이메일은 서비스 가입 내역이 없습니다. 다시 한 번 확인해 주세요.';
			return { errMessage };
		}

		// 비밀번호 일치 여부 확인.
		const correctPasswordHash = user.password;
		const isPasswordCorrect = await bcrypt.compare(password, correctPasswordHash);

		if (!isPasswordCorrect) {
			const errMessage = '비밀번호가 일치하지 않습니다. 다시 한 번 확인해 주세요.';

			return { errMessage };
		}

		// 로그인 성공, JWT 웹 토큰 생성.
		const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';
		const token = jwt.sign({ id: user.id }, secretKey, {
			expiresIn: '6h',
		});

		// 반환할 loginuser 객체를 위한 변수 설정.
		const id = user.id;
		const nickName = user.nickName;

		const loginUser = {
			token,
			id,
			email,
			nickName,
			errMessage: null,
		};

		return loginUser;
	}

	static async setUser(id, { checkId, updateInfo }) {
		let changeUser = await User.finByIdAllinfo({ id });
		if (id !== checkId) {
			const errMessage = '잘못된 토큰입니다.';
			return { errMessage };
		}

		const isPasswordCorrect = await bcrypt.compare(updateInfo.password, changeUser.password); //! 요거 문제인데..

		if (!isPasswordCorrect) {
			const errMessage = '비밀번호가 일치하지 않습니다.';
			return { errMessage };
		}

		if (updateInfo.nickName) {
			const fieldToUpdate = 'nickName';
			const newValue = updateInfo.nickName;
			changeUser = await User.updateUser({ id, fieldToUpdate, newValue });
		}

		if (updateInfo.newPassword) {
			const fieldToUpdate = 'password';
			const newValue = await bcrypt.hash(updateInfo.newPassword, 10);
			changeUser = await User.updateUser({ id, fieldToUpdate, newValue });
		}

		if (updateInfo.age) {
			const fieldToUpdate = 'age';
			const newValue = updateInfo.age;
			changeUser = await User.updateUser({ id, fieldToUpdate, newValue });
		}

		if (updateInfo.weight) {
			const fieldToUpdate = 'weight';
			const newValue = updateInfo.weight;
			changeUser = await User.updateUser({ id, fieldToUpdate, newValue });
		}

		return changeUser;
	}

	static async getUserData({ id }) {
		const user = await User.findById({ id });

		if (!user) {
			const errorMessage = '해당 유저를 찾을 수 없습니다.';
			return { errorMessage };
		}

		return user;
	}
}

export { userService };
