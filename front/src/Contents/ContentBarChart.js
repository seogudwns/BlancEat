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
import { data, data2, options_BarChart } from './ChartData';
const ContentBarChart = ({ blanceEat }) => {
	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

	return (
		<>
			{blanceEat ? (
				<Bar options={options_BarChart} data={data2} />
			) : (
				<Bar options={options_BarChart} data={data} />
			)}
		</>
	);
};

export default ContentBarChart;
