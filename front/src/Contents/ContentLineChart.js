import React from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

const ContnetLineChart = () => {
	ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

	const options = {
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

	const labels = ['4월2일', '4월3일', '4월4일', '4월5일', '4월6일', '4월7일', '4월8일'];

	const data = {
		labels,
		datasets: [
			{
				data: labels.map(() => faker.datatype.number({ min: 0, max: 10000 })),
				borderColor: 'rgb(53, 162, 235)',
				backgroundColor: 'rgba(53, 162, 235, 0.5)',
			},
		],
	};

	return <Line data={data} options={options} />;
};

export default ContnetLineChart;
