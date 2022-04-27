import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 623px;
	height: 230px;
	border: 2px solid #c8c8c8;
	margin-top: 70px;
	padding: 30px;
`;

const StyledInput = styled.input`
	width: 50px;
	height: 20px;
	border: 1px solid #cecfcd;
`;

const StyledButton = styled.button`
	width: 70px;
	background-color: ${props => (props.color ? props.color : 'none')};
	border: 1px solid ${props => (props.color ? props.color : 'none')};
	color: white;
	font-size: 1rem;
	margin: ${props => (props.margin ? props.margin : 'none')};
	cursor: pointer;
`;

const BmiCalculator = () => {
	const [cm, setCm] = useState(0);
	const [kg, setKg] = useState(0);
	const [bmi, setBmi] = useState(0);
	const [bmiState, setBmiState] = useState('');

	const calculateBMI = evt => {
		evt.preventDefault();
		setBmi((kg / (cm / 100) ** 2).toFixed(2));
		if (bmi < 18.5) {
			setBmiState('저체중');
		} else if (18.5 <= bmi < 23) {
			setBmiState('정상');
		} else if (23 <= bmi < 25) {
			setBmiState('과체중');
		} else if (25 <= bmi) {
			setBmiState('비만');
		}
	};

	const resetBMI = () => {
		setCm(0);
		setKg(0);
		setBmi(0);
		setBmiState('');
	};

	return (
		<>
			<StyledContainer>
				<form onSubmit={calculateBMI}>
					신장{' '}
					<StyledInput type="text" value={cm} onChange={evt => setCm(evt.target.value)} />{' '}
					cm / 체중{' '}
					<StyledInput type="text" value={kg} onChange={evt => setKg(evt.target.value)} />{' '}
					kg
					<StyledButton type="submit" color="#00c14d" margin="0 10px 0 210px">
						계산
					</StyledButton>
					<StyledButton onClick={resetBMI} color="#3b3d3b">
						초기화
					</StyledButton>
				</form>
				<br />
				비만도 결과 {bmiState} / BMI 지수 {bmi}
				<img src="/bmi.png" style={{ maxWidth: '603px', marginTop: '50px' }} />
			</StyledContainer>
		</>
	);
};

export default BmiCalculator;
