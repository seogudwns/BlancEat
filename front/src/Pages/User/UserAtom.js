import { atom } from 'recoil';
// 백과 연결 시 유저의 로그인 상태를 전역적으로 활용할 것이 예상되어, 이를 recoil로 뿌려줄 예정입니다.

export const loginState = atom({
	key: 'isLogin',
	default: false,
});

export const userIdState = atom({
	key: 'userId',
	default: '',
});
