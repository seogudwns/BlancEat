/* 범용적으로 사용될 변수 지정 */

/*이미지 링크가 없을 경우*/
export const BlankImageURL =
	'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80';

/* Recommand 페이지 플로우 조절을 위한 state */
export const RecommandStates = {
	IDLE: 'IDLE',
	INPUT: 'INPUT',
	OUTPUT: 'OUTPUT',
	RESET: 'RESET',
};

/* 변수명 : 한글단어 */
export const NutInfoWords = {
	/*열량 */
	ENERGY: '열량',
	Cal: '칼로리 (KCal)',
	/*3대영양소 */
	MAJORNUTS: '3대 영양소',
	Carbon: '탄수화물 (g)',
	Protein: '단백질 (g)',
	Fat: '지방 (g)',
	/*당/식이섬유*/
	SNF: '당/식이섬유',
	Sugar: '당류 (g)',
	Fiber: '식이섬유 (g)',
	/*무기염류 */
	INORGANICS: '무기염류',
	Ca: '칼슘 (㎎)',
	Na: '나트륨 (㎎)',
	Fe: '철분 (㎎)',
	Zn: '아연 (㎎)',
	/*비타민군 */
	VITAMINS: '비타민군',
	VitA: '비타민 A (㎍)',
	VitB6: '비타민 B6 (㎎)',
	VitC: '비타민 C (㎎)',
	VitE: '비타민 E (㎎)',
	Niacin: '나이아신 (㎎)',
	Folate: '엽산 (㎍)',
	nutToString(key) {
		return this[key];
	},
};

/* 배열 유효성 체크 */
export const ValidateArray = arr => {
	if (Array.isArray(arr) && arr.length !== 0) {
		return true;
	}
	return false;
};

export const isEmptyObj = obj => {
	if (obj.constructor === Object && Object.keys(obj).length === 0) {
		return true;
	}

	return false;
};

export const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
};
