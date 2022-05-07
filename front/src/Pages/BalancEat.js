import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ContentTooMuchCoder from '../Contents/ContentTooMuchCoder';
import ContentBarChart from '../Contents/ContentBarChart';
import ContentPieChart from '../Contents/ContentPieChart';

import { PageContainer } from './Styles/stylePages';
import {
	data1,
	data2,
	data3,
	data4,
	options_BarChart,
	PieData1,
	PieData2,
} from '../Contents/ChartData';
import { LargeButton } from '../Contents/Styles/styleContents';
const BalancEat = () => {
	const navigate = useNavigate();
	const StyledContainer = styled.div`
		background-color: gray;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: ${props => (props.margin ? props.margin : 'none')};
	`;
	const StyledImg = styled.img`
		width: ${props => props.width};
		src: ${props => props.src};
		height: ${props => (props.height ? props.height : 'none')};
		margin: ${props => (props.margin ? props.margin : 'none')};
		border-radius: ${props => (props.borderRadius ? props.borderRadius : 'none')};
	`;
	const StyledH4 = styled.h4`
		text-align: center;
		line-height: 3rem;
		padding: ${props => props.padding};
	`;
	const StyledH1 = styled.h1`
		font-size: ${props => (props.fontSize ? props.fontSize : 'none')};
		text-align: ${props => (props.textAlign ? props.textAlign : 'none')};
	`;
	return (
		<PageContainer fluid>
			<StyledContainer>
				<div style={{ paddingRight: '50px', display: 'block', backgroundColor: '#f0f1f3' }}>
					<div
						style={{ width: '600px', display: 'flex', justifyContent: 'space-between' }}
					>
						<ContentPieChart data={PieData1} title={'고비만 국가의 단백질 섭취'} />
						<ContentPieChart data={PieData2} title={'저비만 국가의 단백질 섭취'} />
					</div>
					<StyledH1 style={{ marginTop: '30px' }} fontSize="30px" textAlign="center">
						단백질 섭취의 균형을 잡아라!
					</StyledH1>
					<StyledH4 padding="30px">
						균형잡힌 단백질의 섭취는 비만율을 낮출 수 있습니다! <br /> 건강하게 단백질을
						섭취하려면 3분의 2는 식물성, 3분의 1은 동물성 단백질로 섭취하는 것이
						좋습니다.
					</StyledH4>
				</div>
			</StyledContainer>
			<StyledContainer style={{ margin: '100px 0 100px 0' }}>
				<div
					style={{
						width: '70%',
						display: 'flex',
						justifyContent: 'space-between',
						backgroundColor: '#f0f1f3',
						paddingLeft: '30px',
					}}
				>
					<div style={{ paddingRight: '50px', backgroundColor: '#f0f1f3' }}>
						<ContentBarChart
							title={'비만과 질병의 연관성'}
							data={data3}
							option1={false}
						/>
					</div>
					<div style={{ paddingRight: '50px', backgroundColor: '#f0f1f3' }}>
						<ContentBarChart
							title={'당뇨병이 있을경우 합병증에 걸릴 확률'}
							data={data4}
							option1={false}
						/>
					</div>
				</div>

				<div style={{ paddingRight: '50px', backgroundColor: '#f0f1f3' }}>
					<StyledH1 fontSize="30px" textAlign="center">
						비만과 약속된 고통
					</StyledH1>
					<StyledH4 padding="30px" style={{ width: '500px' }}>
						비만은 여러 합병증을 야기할 수 있습니다.
						<br />
						'맛있게'를 넘어서 '건강하게' 식사해봅시다.
					</StyledH4>
				</div>
			</StyledContainer>

			<StyledContainer style={{ margin: '100px 0 100px 0' }}>
				<div style={{ backgroundColor: '#f0f1f3' }}>
					<StyledH1 fontSize="30px" textAlign="center">
						그럼 어떻게 '건강하게' 식사할 수 있나요?
					</StyledH1>
					<StyledH4 padding="30px" style={{ width: '1300px' }}>
						BalancEat이 회원님의 건강 상태에 맞춘 건강한 식단을 제공해드립니다!
						<br />
						지금 바로 건강한 식단을 추천받아 보세요!
					</StyledH4>
					<div
						style={{
							display: 'flex',
							width: '100%',
							justifyContent: 'center',
							marginTop: '10px',
						}}
					>
						<LargeButton
							variant="success"
							style={{ width: '500px' }}
							onClick={() => navigate('/recommand')}
						>
							<h3>지금 바로 건강한 식단을 추천받으세요!</h3>
						</LargeButton>
					</div>
					<ContentBarChart data={data2} option1={true} />
				</div>
			</StyledContainer>
			<ContentTooMuchCoder />
		</PageContainer>
	);
};

export default BalancEat;
