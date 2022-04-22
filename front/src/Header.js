import React from 'react';
import styled from 'styled-components';

const Header = () => {
	const StyledHeader = styled.div`
		display: flex;
		justify-content: space-between;
		height: 15%;
	`;

	const StyledLogo = styled.div`
		flex: 1;
		align-items: center;
	`;

	const StyledMenu = styled.nav`
		flex: 4;
		display: flex;
		justify-content: space-around;
		align-items: center;
		list-style: none;
	`;

	const StyledUserMenu = styled.nav`
		flex: 2;
		display: flex;
		justify-content: space-around;
		align-items: center;
		list-style: none;
	`;

	const isLogin = false;

	return (
		<>
			<StyledHeader>
				<StyledLogo>This is Logo</StyledLogo>
				<StyledMenu>
					<li>메뉴1</li>
					<li>메뉴2</li>
					<li>메뉴3</li>
				</StyledMenu>
				<StyledUserMenu>
					{!isLogin ? <li>로그인</li> : <li>로그아웃</li>}
					<li>회원가입</li>
					{isLogin ? (
						<li>사용자 정보</li>
					) : (
						<li style={{ visibility: 'hidden' }}>사용자 정보</li>
					)}
				</StyledUserMenu>
			</StyledHeader>
		</>
	);
};

export default Header;
