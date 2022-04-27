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
	`;
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
					<h1>기본 신체 정보</h1>
				</StyledUserInfo>
			</StyledContainer>
		</>
	);
};

export default UserPage;
