import styled from 'styled-components';

const UserPage = () => {
	const StyledToomuchText = styled.h1`
		padding: 10px 50px 0px 50px;
		color: gray;
	`;
	const StyledToomuchBox = styled.h1`
		margin-left: 30px;
		padding: 10px 50px 0px 50px;
		background-color: green;
		color: white;
		height: 50px;
	`;
	const StyledContainer = styled.div`
		margin: 50px 0 0 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`;
	const StyledUserInfo = styled.div`
		margin-left: 30px;
		border: solid 1px black;
		width: 50%;
		max-width: 700px;
	`;
	const StyledUserInfoBox = styled.div`
		padding-top: 13px;
		color: gray;
		font-size: 20px;
		height: 50px;
		border: 1px solid black;
		margin-bottom: 10px;
		border-radius: 10px;
		width: 90%;
	`;

	const StyledUserBMIbox = styled.div``;
	return (
		<>
			<StyledContainer>
				<div style={{ display: 'inline-flex' }}>
					<StyledToomuchBox>사용자 건강정보</StyledToomuchBox>
					<StyledToomuchText>
						당신의 건강상태는 <span style={{ color: 'green' }}>양호</span>입니다
					</StyledToomuchText>
				</div>
			</StyledContainer>

			<StyledContainer>
				<StyledUserInfo>
					<h1 style={{ fontWeight: 'lighter' }}>기본 신체 정보</h1>
					<div style={{ border: 'solid 1px black', marginBottom: '10px' }}></div>
					<div style={{ display: 'flex' }}>
						<div style={{ width: '30%' }}>gd</div>
						<div style={{ width: '70%' }}>
							<StyledUserInfoBox>연령 만 29 세/ 남성</StyledUserInfoBox>
							<StyledUserInfoBox>키 175cm</StyledUserInfoBox>
							<StyledUserInfoBox>몸무게 68kg</StyledUserInfoBox>
						</div>
					</div>
				</StyledUserInfo>

				<StyledUserInfo></StyledUserInfo>
			</StyledContainer>
		</>
	);
};

export default UserPage;
