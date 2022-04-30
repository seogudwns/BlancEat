import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const ContentBarChart = () => {
	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
	const options = {
		plugins: {
			legend: {
				position: 'none',
			},
		},
		scales: {
			yAxes: [
				{
					ticks: {
						min: 0, // y축 스케일에 대한 최소값 설정
						stepSize: 1, // y축 그리드 한 칸당 수치
					},
				},
			],
		},

		// false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
		// true : 크기가 알아서 결정됨.
	};

	const data = {
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

	return <Bar options={options} data={data} />;
};

export default ContentBarChart;
