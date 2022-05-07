export const data = {
	// 각 막대별 라벨
	labels: ['탄수화물', '지방', '단백질', '설탕', '소금', '캴슘', '마그네슘'],
	datasets: [
		{
			borderWidth: 1, // 테두리 두께
			data: [30, 5, 82, 30, 52, 81, 68, 55, 5], // 수치
			backgroundColor: ['yellow', 'red', 'green', 'gray', 'pink', 'skyblue', 'blue'], // 각 막대 색
		},
	],
};

export const data2 = {
	// 각 막대별 라벨
	labels: [
		'식물성식품',
		'곡물류',
		'협과류',
		'뿌리채소',
		'사탕작물',
		'향신료',
		'수산물',
		'육류부산물',
		'유지작물',
		'어류해산물',
		'기타류',
		'과일류',
		'야채류',
		'견과류',
		'식물성기름',
		'주류음료',
		'강장식품',
		'난류',
		'동물성지방',
		'육류',
		'유제품',
		'동물성식품',
		'당류',
	],
	datasets: [
		{
			borderWidth: 1, // 테두리 두께
			data: [
				-50.25, -50.04, -33.93, -30.84, -22.96, -11.35, -9.7, -3.29, -2.99, -2.64, 6.286,
				12.16, 15.25, 24.18, 24.4, 27.71, 32.97, 39.75, 40.58, 41.06, 42.56, 50.23, 59.29,
			], // 수치
			backgroundColor: [
				'#003666',
				'#003e75',
				'#004c8e ',
				'#0057a3',
				'#013783',
				'#00419e ',
				'#004ab2',
				'#0050c1 ',
				'#015ddf',
				'#9fc6fe',
				'#fec3c2',
				'#fdbab9',
				'#feaaa9',
				'#fea09f',
				'#fd918f',
				'#fd7d7b',
				'#fe6e6b',
				'#fd8a8a',
				'#fe6666 ',
				'#f20202 ',
				'#d40202',
				'#b10000 ',
				'#8e0000 ',
			], // 각 막대 색
		},
	],
};
export const data3 = {
	// 각 막대별 라벨
	labels: ['뇌졸증', '심장병', '고혈압', '당뇨'],
	datasets: [
		{
			borderWidth: 1, // 테두리 두께
			data: [3, 5, 22, 25], // 수치
		},
	],
};
export const data4 = {
	// 각 막대별 라벨
	labels: ['뇌졸증', '심장병', '고혈압'],
	datasets: [
		{
			borderWidth: 1, // 테두리 두께
			data: [10, 18, 28], // 수치
			backgroundColor: ['#fd8a8a'],
		},
	],
};

export const options_LineChart = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
		title: {
			display: false,
		},
	},
};
