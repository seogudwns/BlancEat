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
	ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
const ContentPieChart = ({ data, title }) => {
	const Pie_options = {
		maintainAspectRatio: true,
		responsive: true,

		plugins: {
			legend: {
				position: 'top',
			},
			labels: {
				render: 'label',
			},
			title: {
				display: true,
				text: title,
			},
		},
	};

	// false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
	// true : 크기가 알아서 결정됨.
	ChartJS.register(ArcElement);
	return (
		<>
			<Pie data={data} options={Pie_options} />
		</>
	);
};

export default ContentPieChart;
