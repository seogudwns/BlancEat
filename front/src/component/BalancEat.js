import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const BalancEat = () => {
	const StyledContainer = styled.div`
		margin: 200px 0 0 200px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`;
	const StyledImg = styled.img`
		width: 500px;
	`;
	const StyledImg2 = styled.img`
		width: 1500px;
	`;
	const StyledImg3 = styled.img`
		width: 1000px;
	`;
	const StyledteamContainer = styled.div`
		border: 2px solid black;
		display: flex;
		flex-direction: column;
		margin-top: 100px;
		background-color: gray;
	`;
	const StyledUl = styled.ul`
		display: flex;
		margin: 10vh auto;
		list-style: none;
		padding: 0px;
	`;
	const StyledLi = styled.li`
		list-style: none;
		margin: 0 auto;
		text-align: center;
	`;
	const StyledTeamImg = styled.img`
		border: 1px solid gray;
		border-radius: 50%;
		height: 7vw;
		width: 7vw;
	`;
	const StyledTeam = styled.div`
		width: 100%;
		margin-top: 100px;
	`;
	const StyledToomuchBox = styled.h1`
		margin-left: 30px;
		padding: 10px 50px 0px 50px;
		background-color: green;
		color: white;
	`;

	const StyledToomuchText = styled.h1`
		padding: 10px 50px 0px 50px;
		color: white;
	`;
	const StyledTeamBox = styled.div`
		display: inline-flex;
		width: 92%;
		border: 1px solid black;
		margin: 30px;
		height: 60px;
	`;
	const teamMembers = [
		['홍일도', 'FRONTEND', 'theohong@gmail.com'],
		['김기동', 'FRONTEND', 'dewrain331@gmail.com'],
		['홍주완', 'FRONTEND', 'vjvl95@naver.com'],
		['배주영', 'BACKEND', 'baejuyoung49@gmail.com'],
		['김성훈', 'BACKEND', 'open7rms@gmail.com'],
		['서형준', 'BACKEND', 'seogudwns12@gmail.com'],
	];

	const TeamMember = ({ teamMember }) => {
		return (
			<div style={{ display: 'inline-block', width: '50%' }}>
				<StyledTeamBox style={{ backgroundColor: 'white' }}>
					<img
						style={{
							borderRadius: '15px',
							marginLeft: '10px',
							marginTop: '5px',
						}}
						src="/img/bmcho-pic.1a18473a818b64ff3b5f.png"
						width="50px"
						height="50px"
					/>

					<span
						style={{
							fontWeight: 'bolder',
							marginLeft: '20px',
							fontSize: '20px',
						}}
					>
						{teamMember[0]}
						<span
							style={{
								fontWeight: 'lighter',
								marginLeft: '20px',
								fontSize: '20px',
							}}
						>
							{teamMember[1]}
						</span>
						<p style={{ fontWeight: 'lighter', margin: '0px' }}>{teamMember[2]}</p>
					</span>
				</StyledTeamBox>
			</div>
		);
	};
	return (
		<>
			<Container>
				<StyledContainer>
					<div style={{ paddingRight: '50px', display: 'block' }}>
						<h1>단백질 섭취와 비만의 상관관계</h1>
						<h4>
							비만율이 높은 국가는 동물성 단백질과 식물성 단백질의 섭취 비율이 절반인
							반면, 비만율이 낮은 국가는 식물성 단백질 섭취 비율이 70%로 더 높습니다.
							동물성 단백질 음식에는 포화지방산, 콜레스테롤 등의 함량이 높기 때문에
							동물성 단백질을 위주로 섭취하면 비만과 각종 질환에 걸릴 위험이
							높아집니다. 건강하게 단백질을 섭취하려면 3분의 2는 식물성, 3분의 1은
							동물성 단백질로 섭취하는 것이 좋다고 합니다.
						</h4>
					</div>
					<StyledImg3 src="/img/obesity_protein.png" />
				</StyledContainer>
				<StyledContainer>
					<StyledImg src="/img/bmi와질병관계.png" />
					<StyledImg src="/img/당뇨병있을경우 다른 질병이 있을 확률.png" />
					<div style={{ paddingRight: '50px' }}>
						<h1>비만과 질병관계</h1>
						<h4>
							왼쪽은 비만과 질병의 연관성입니다. 당뇨병이 가장 관련성이 높습니다.
							<br />
							당뇨병이 있으신분의 경우 뇌졸중, 심장발작,고지혈증, 고혈압이 5%이상 크게
							<br />
							상승하는것을 보실수 있습니다.
						</h4>
					</div>
				</StyledContainer>

				<StyledContainer>
					<div>
						<h1>비만과 음식과의 연관성</h1>
						<h4>
							가운데 생선을 기준으로 왼쪽에는 비만과 음식과의 상관 관계도가 마이너스로
							오른쪽은 플러스로 되어있습니다. 맨왼쪽의 경우 야채,채소류이며,
							맨오른쪽은 설당과 당류입니다.
						</h4>
						<StyledImg2 src="/img/식단과 비만의 관계.png" />
					</div>
				</StyledContainer>
				<StyledteamContainer>
					<div style={{ display: 'inline-flex' }}>
						<StyledToomuchBox>투머치 코더</StyledToomuchBox>
						<StyledToomuchText>저희들이 만들었습니다!!</StyledToomuchText>
					</div>
					<div>
						{teamMembers.map((teamMember, index) => (
							<TeamMember key={index} teamMember={teamMember} />
						))}
					</div>
				</StyledteamContainer>
			</Container>
		</>
	);
};

export default BalancEat;
