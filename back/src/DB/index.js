import mongoose from 'mongoose';

const URL = process.env.MongoBD_URL || '주소에 접속이 되지 않았습니다.';

mongoose.connect(URL);
const db = mongoose.connection;

db.on('connected', () => {
	console.log('정상적으로 서버에 연결되었습니다.' + URL);
});
db.on('error', error => console.error('MongoDB 연결에 실패하였습니다...\n' + URL + '\n' + error));

// model import 후 export로 Service에 연결하기.
