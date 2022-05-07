import React from 'react';
import styled from 'styled-components';
import ContentTooMuchCoder from '../Contents/ContentTooMuchCoder';
import ContentBarChart from '../Contents/ContentBarChart';
import ContentPieChart from '../Contents/ContentPieChart';

import { PageContainer } from './Styles/stylePages';
import { data1, data2, data3, data4, PieData1, PieData2 } from '../Contents/ChartData';
const BalancEat = () => {
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
					<StyledImg
						width="1200px"
						margin="10px 0px 0px 150px"
						src="/img/obesity_protein.png"
					/>
					<div
						style={{ width: '600px', display: 'flex', justifyContent: 'space-between' }}
					>
						<ContentPieChart data={PieData1} />
						<ContentPieChart data={PieData2} />
					</div>
					<StyledH1 fontSize="30px" textAlign="center">
						단백질 섭취와 비만의 상관관계
					</StyledH1>
					<StyledH4 padding="30px">
						비만율이 높은 국가는 동물성 단백질과 식물성 단백질의 섭취 비율이 절반인
						반면, 비만율이 낮은 국가는 식물성 단백질 섭취 비율이 70%로 더 높습니다.
						동물성 단백질 음식에는 포화지방산, 콜레스테롤 등의 함량이 높기 때문에 동물성
						단백질을 위주로 섭취하면 비만과 각종 질환에 걸릴 위험이 높아집니다. 건강하게
						단백질을 섭취하려면 3분의 2는 식물성, 3분의 1은 동물성 단백질로 섭취하는
						것이 좋다고 합니다.
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
					<h1 style={{ fontSize: '30px', textAlign: 'center' }}>비만과 질병관계</h1>
					<StyledH4 padding="30px">
						왼쪽은 비만과 질병의 연관성입니다. 당뇨병이 가장 관련성이 높습니다.
						<br />
						당뇨병이 있으신분의 경우 뇌졸중, 심장발작,고지혈증, 고혈압이 5%이상 크게
						<br />
						상승하는것을 보실수 있습니다.
					</StyledH4>
				</div>
			</StyledContainer>

			<StyledContainer style={{ margin: '100px 0 100px 0' }}>
				<div style={{ backgroundColor: '#f0f1f3' }}>
					<StyledH1 fontSize="30px" textAlign="center">
						비만과 음식과의 연관성
					</StyledH1>
					<StyledH4 padding="30px">
						가운데 생선을 기준으로 왼쪽에는 비만과 음식과의 상관 관계도가 마이너스로
						오른쪽은 플러스로 되어있습니다. 맨왼쪽의 경우 야채,채소류이며, 맨오른쪽은
						설당과 당류입니다.
					</StyledH4>
					<ContentBarChart data={data2} option1={true} />
				</div>
			</StyledContainer>
			<ContentTooMuchCoder />
		</PageContainer>
	);
};

export default BalancEat;
