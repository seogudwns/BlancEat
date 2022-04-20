import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

const app = express();

URL = process.env.MongoBD_URL || '주소에 접속이 되지 않았습니다.';

mongoose.connect(URL);

const db = mongoose.connection;

db.on('connected', () => {
	console.log('정상적으로 서버에 연결되었습니다.' + URL);
	print(
		'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	);
});
db.on('error', error => console.error('MongoDB 연결에 실패하였습니다...\n' + URL + '\n' + error));

// ===========================================

app.use(cors());

const PORT = process.env.SERVER_PORT || 5000;

app.get('/', (req, res) => {
	console.log('접속메시지. 이게 보인다면 로컬에서 접속이 성공했다는 것이 콘솔창에 뜰 것입니다.');
	res.send('10팀 데이터 프로젝트 시작!');
});

const Listening = () => {
	console.log(`연결된 위치: http://localhost:${PORT}`);
};

app.listen(PORT, Listening);
