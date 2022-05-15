import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { StyledText } from './styleContents';
import { StyledButton as StyledBtn } from '../Components/Styles/styleButton';

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
	const [status, setStatus] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		if (!isNaN(bmi) && kg !== 0 && cm !== 0) {
			setBmi((kg / (cm / 100) ** 2).toFixed(2));
			console.log(bmi);
		} else if (isNaN(bmi) && kg === 0 && cm === 0) {
			setBmi(0);
		} else if (bmi === 'Infinity') {
			setKg(0);
			setCm(0);
		}

		if (kg === 0 || cm === 0) {
			setBmi(0);
		}

		toggleStatus();
	}, [kg, cm, bmi]);

	const resetBMI = evt => {
		evt.preventDefault();
		setCm(0);
		setKg(0);
	};

	const toggleStatus = () => {
		if (bmi <= 23 && 18.5 <= bmi && bmi > 0) {
			setStatus(true);
		} else {
			setStatus(false);
		}
	};

	return (
		<>
			<StyledContainer>
				<form onSubmit={evt => evt.preventDefault()}>
					신장{' '}
					<StyledInput
						type="number"
						min="0"
						value={cm}
						onChange={evt => setCm(Number(evt.target.value))}
					/>{' '}
					cm / 체중{' '}
					<StyledInput
						type="number"
						min="0"
						value={kg}
						onChange={evt => setKg(Number(evt.target.value))}
					/>{' '}
					kg
					<StyledButton
						type="submit"
						onClick={resetBMI}
						color="#3b3d3b"
						margin="0 0 0 240px"
					>
						초기화
					</StyledButton>
				</form>
				<br />
				{status ? (
					<>
						<StyledText ta="center" size="1rem" style={{ width: '100%' }}>
							BMI로 측정한 회원님의 현재 건강은{' '}
							<StyledText size="1.5rem" color="green" style={{ fontWeight: 'bold' }}>
								건강합니다.
							</StyledText>
						</StyledText>
						<div
							style={{
								display: 'flex',
								width: '100%',
								justifyContent: 'center',
								marginTop: '10px',
							}}
						>
							<StyledBtn
								style={{ background: '#075f3a' }}
								onClick={() => navigate('/recommand')}
							>
								지금 바로 식단을 추천받고, 건강을 유지해보세요.
							</StyledBtn>
						</div>
					</>
				) : (
					<>
						<StyledText ta="center" size="1rem" style={{ width: '100%' }}>
							BMI로 측정한 회원님의 현재 건강은{' '}
							<StyledText size="1.5rem" color="red" style={{ fontWeight: 'bold' }}>
								위험합니다.
							</StyledText>
						</StyledText>
						<div
							style={{
								display: 'flex',
								width: '100%',
								justifyContent: 'center',
								marginTop: '10px',
							}}
						>
							<StyledBtn
								style={{ background: '#075f3a' }}
								onClick={() => navigate('/recommand')}
							>
								지금 바로 식단을 추천받고, 건강을 개선해보세요.
							</StyledBtn>
						</div>
					</>
				)}
			</StyledContainer>
		</>
	);
};

export default BmiCalculator;
