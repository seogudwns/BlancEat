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
		margin: 300px;
	`;
	const StyledUl = styled.ul`
		display: flex;
		margin: 10vh auto;
		line-style: none;
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
	return (
		<>
			<Container>
				<StyledContainer>
					<div>
						<h1>균형잡인 식단의 필요성</h1>
						<h4>우리가 균형잡힌 식단을 먹어야 하는 이유는</h4>
					</div>
					<StyledImg src="/img/unknown.png" />
				</StyledContainer>

				<StyledContainer>
					<div>
						<h1>균형잡인 식단의 필요성</h1>
						<h4>우리가 균형잡힌 식단을 먹어야 하는 이유는</h4>
					</div>
					<StyledImg src="/img/unknown.png" />
				</StyledContainer>

				<StyledContainer>
					<div>
						<h1>균형잡인 식단의 필요성</h1>
						<h4>우리가 균형잡힌 식단을 먹어야 하는 이유는</h4>
					</div>
					<StyledImg src="/img/unknown.png" />
				</StyledContainer>

				<StyledContainer>
					<div>
						<h1>균형잡인 식단의 필요성</h1>
						<h4>우리가 균형잡힌 식단을 먹어야 하는 이유는</h4>
					</div>
					<StyledImg src="/img/unknown.png" />
				</StyledContainer>

				<StyledteamContainer>
					<h1>팀원 소개</h1>
					<div
						style={{
							borderBottom: '1px solid #789',
							flexDirection: 'row',
						}}
					>
						<StyledUl>
							<StyledLi>
								<StyledTeamImg src="/img/bmcho-pic.1a18473a818b64ff3b5f.png" />
								<h2>이름</h2>
								<h3>직무</h3>
							</StyledLi>
							<StyledLi>
								<StyledTeamImg src="/img/bmcho-pic.1a18473a818b64ff3b5f.png" />
								<h2>이름</h2>
								<h3>직무</h3>
							</StyledLi>
							<StyledLi>
								<StyledTeamImg src="/img/bmcho-pic.1a18473a818b64ff3b5f.png" />
								<h2>이름</h2>
								<h3>직무</h3>
							</StyledLi>
							<StyledLi>
								<StyledTeamImg src="/img/bmcho-pic.1a18473a818b64ff3b5f.png" />
								<h2>이름</h2>
								<h3>직무</h3>
							</StyledLi>
							<StyledLi>
								<StyledTeamImg src="/img/bmcho-pic.1a18473a818b64ff3b5f.png" />
								<h2>이름</h2>
								<h3>직무</h3>
							</StyledLi>
							<StyledLi>
								<StyledTeamImg src="/img/bmcho-pic.1a18473a818b64ff3b5f.png" />
								<h2>이름</h2>
								<h3>직무</h3>
							</StyledLi>
						</StyledUl>
					</div>
				</StyledteamContainer>
			</Container>
		</>
	);
};

export default BalancEat;
