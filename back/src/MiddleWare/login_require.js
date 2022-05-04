import jwt from 'jsonwebtoken';

const login_required = (req, res, next) => {
	const userToken = req.headers['authorization']?.split(' ')[1] ?? 'null';

	if (userToken === 'null') {
		console.log('token not exist!');
		res.status(400).send('로그인 해주세요.');
		return;
	}

	try {
		const secretKey = process.env.JWT_SECRET_KEY || 'secret-key';
		const jwtDecoded = jwt.verify(userToken, secretKey);

		req.currentUserId = jwtDecoded.id;
		next();
	} catch (err) {
		console.log('토큰 다름');
		res.status(400).json({ errorMessage: err.message });
		return;
	}
};

export { login_required };
