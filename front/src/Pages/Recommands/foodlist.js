/* 검색기능 테스트를 위한 임시 음식 목록 */
export const FOODS = [
	'감자',
	'감자전',
	'감자탕',
	'감자깡',
	'고구마',
	'탕수육',
	'눈꽃탕수육',
	'김치',
	'빵',
	'불고기 피자',
	'피자 빵',
	'피자맛 과자',
	'피자 치즈',
	'피자 덮밥',
	'콤비네이션 피자',
	'슈림프 피자',
	'과일 피자',
	'민트초코 피자',
	'파인애플 피자',
	'포테이토 피자',
	'시카고 피자',
	'고르곤 졸라 피자',
	'솜사탕',
	'번데기',
	'삼겹살',
	'제육덮밥',
	'돈까스 덮밥',
	'가츠동',
	'치즈 돈까스',
];

/*받게될 데이터 더미 */
export const FOODNUTS = [
	{
		foodName: '불고기피자',
		Cal: 505, //칼로리Kcal
		Protein: 27.4,
		Fat: 16.7,
		Carbon: 61.2, //탄수호물
		Sugar: 0,
		Fiber: 4.9,
		Ca: 480.35,
		VitA: 0,
		Fe: 1.47,
		Na: 916.87,
		Zn: 3.65,
		Niacin: 0.54, //나이아신
		VitE: 0,
		VitC: 2.56,
		Folate: 38.43, //엽산
		VitB6: 0,
		ImgURL: 'https://cdn.pixabay.com/photo/2016/12/22/08/54/pizza-1924750_960_720.jpg',
	},
	{
		foodName: '포테이토 피자',
		Cal: 335, //칼로리Kcal
		Protein: 17.4,
		Fat: 13.7,
		Carbon: 22.2, //탄수호물
		Sugar: 1.05,
		Fiber: 42,
		Ca: 80.35,
		VitA: 32,
		Fe: 1.47,
		Na: 91.87,
		Zn: 1.65,
		Niacin: 1.54, //나이아신
		VitE: 120,
		VitC: 2.36,
		Folate: 18.43, //엽산
		VitB6: 3,
		ImgURL: 'https://cdn.pixabay.com/photo/2016/08/03/04/17/pizza-1565731_960_720.jpg',
	},
	{
		foodName: '콤비네이션 피자',
		Cal: 1505, //칼로리Kcal
		Protein: 17.4,
		Fat: 15.7,
		Carbon: 61.2, //탄수호물
		Sugar: 2,
		Fiber: 14.9,
		Ca: 40.35,
		VitA: 10,
		Fe: 1.7,
		Na: 96.87,
		Zn: 13.65,
		Niacin: 40.54, //나이아신
		VitE: 10,
		VitC: 12.56,
		Folate: 3.43, //엽산
		VitB6: 10,
		ImgURL: 'https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg',
	},
];

export const USERNUTSTATS = {
	_id: '626803c87cbbc7d7b40e333e',
	Age: '15-18',
	Sex: 'F',
	Protein: '0.8',
	Fat: 0.8,
	Carbon: 5.8,
	Sugar: 40,
	Sugar_limit: 50,
	Fiber: 20,
	VitA: 600,
	VitA_limit: 2400,
	VitE: 10,
	VitE_limit: 430,
	VitC: 100,
	VitC_limit: 1600,
	VitB6: 1.4,
	VitB6_limit: 100,
	Niacin: 30,
	Niacin_limit: 800,
	Folate: 400,
	Folate_limit: 900,
	Ca: 800,
	Ca_limit: 2500,
	Na: 1.5,
	Na_limit: 2,
	Fe: 17,
	Fe_limit: 45,
	Zn: 9,
	Zn_limit: 30,
};
