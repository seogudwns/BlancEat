import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const BalancEat = () => {
	const StyledContainer = styled.div`
		margin: 200px 0 0 400px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`;
	const StyledImg = styled.img`
		margin: 0 100px 0 0;
		width: 500px;
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
	return (
		<>
			<Container>
				<StyledContainer>
					<div>
						<h1>균형잡인 식단의 필요성</h1>
						<h4>
							우리가 균형잡힌 식단을 먹어야 하는 이유는 BMI 점수가 높을수록
							심장질환이나 당뇨병등 질병에 걸릴 확률이 높아지는 것을 볼 수있습니다.
						</h4>
					</div>
					<StyledImg src="/img/bmi와질병관계.png" />
				</StyledContainer>

				<StyledContainer>
					<div>
						<h1>균형잡인 식단의 필요성</h1>
						<h4>
							당뇨병에 걸렸을 경우 다른 질병에 걸릴 확률 또한 매우 높아지므로 식단
							관리를 해야 합니다.
						</h4>
					</div>
					<StyledImg src="/img/당뇨병있을경우 다른 질병이 있을 확률.png" />
				</StyledContainer>
				<StyledteamContainer>
					<div style={{ display: 'inline-flex' }}>
						<StyledToomuchBox>투머치 코더</StyledToomuchBox>
						<StyledToomuchText>저희들이 만들었습니다!!</StyledToomuchText>
					</div>
					<div>
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
									홍일도
									<span
										style={{
											fontWeight: 'lighter',
											marginLeft: '20px',
											fontSize: '20px',
										}}
									>
										FRONTEND
									</span>
									<p style={{ fontWeight: 'lighter', margin: '0px' }}>
										theohong@gmail.com
									</p>
								</span>
							</StyledTeamBox>
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
									김기동
									<span
										style={{
											fontWeight: 'lighter',
											marginLeft: '20px',
											fontSize: '20px',
										}}
									>
										FRONTEND
									</span>
									<p style={{ fontWeight: 'lighter', margin: '0px' }}>
										dewrain331@gmail.com
									</p>
								</span>
							</StyledTeamBox>
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
									홍주완
									<span
										style={{
											fontWeight: 'lighter',
											marginLeft: '20px',
											fontSize: '20px',
										}}
									>
										FRONTEND
									</span>
									<p style={{ fontWeight: 'lighter', margin: '0px' }}>
										vjvl95@naver.com
									</p>
								</span>
							</StyledTeamBox>
						</div>
						<div style={{ display: 'inline-block', width: '50%', float: 'right' }}>
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
									배주영
									<span
										style={{
											fontWeight: 'lighter',
											marginLeft: '20px',
											fontSize: '20px',
										}}
									>
										BACKEND
									</span>
									<p style={{ fontWeight: 'lighter', margin: '0px' }}>
										baejuyoung49@gmail.com
									</p>
								</span>
							</StyledTeamBox>
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
									김성훈
									<span
										style={{
											fontWeight: 'lighter',
											marginLeft: '20px',
											fontSize: '20px',
										}}
									>
										BACKEND
									</span>
									<p style={{ fontWeight: 'lighter', margin: '0px' }}>
										open7rms@gmail.com
									</p>
								</span>
							</StyledTeamBox>
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
									서형준
									<span
										style={{
											fontWeight: 'lighter',
											marginLeft: '20px',
											fontSize: '20px',
										}}
									>
										BACKEND
									</span>
									<p style={{ fontWeight: 'lighter', margin: '0px' }}>
										seogudwns12@gmail.com
									</p>
								</span>
							</StyledTeamBox>
						</div>
					</div>
				</StyledteamContainer>
			</Container>
		</>
	);
};

export default BalancEat;
