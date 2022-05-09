import 'dotenv/config';
import { app } from './src/index.js';

const PORT = process.env.SERVER_PORT || 5000;

app.get('/', (req, res) => {
	console.log('접속메시지. 이게 보인다면 로컬에서 접속이 성공했다는 것이 콘솔창에 뜰 것입니다.');
	res.send('10팀 데이터 프로젝트 시작!');
});

const Listening = () => {
	console.log(`연결된 위치: http://localhost:${PORT}`);
};

app.listen(PORT, Listening);
