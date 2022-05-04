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
const ContentBarChart = ({ data }) => {
	ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

	return (
		<>
			<Bar options={options_BarChart} data={data} />
		</>
	);
};

export default ContentBarChart;
