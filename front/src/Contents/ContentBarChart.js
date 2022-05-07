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
import { options_BarChart } from './ChartData';
const ContentBarChart = ({ data, title, option1 }) => {
	const options_BarChart = {
		responsive: true,
		maintainAspectRatio: option1,
		plugins: {
			legend: {
				position: 'none',
			},
			title: {
				display: true,
				text: title,
			},
		},

		// false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
		// true : 크기가 알아서 결정됨.
	};

	// false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
	// true : 크기가 알아서 결정됨.
	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

	return (
		<>
			<Bar options={options_BarChart} data={data} />
		</>
	);
};

export default ContentBarChart;
