import React from 'react';
import styled from 'styled-components';

const Header = () => {
	const StyledHeader = styled.div`
		display: flex;
		justify-content: space-between;
		height: 50px;
	`;

	const StyledLogo = styled.div`
		flex: 1;
		align-items: center;
	`;

	const StyledNav = styled.nav`
		flex: ${props => (props.flex ? props.flex : 0)};
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
				<StyledNav flex="4">
					<li>메뉴1</li>
					<li>메뉴2</li>
					<li>메뉴3</li>
				</StyledNav>
				<StyledNav flex="2">
					{!isLogin ? <li>로그인</li> : <li>로그아웃</li>}
					<li>회원가입</li>
					{isLogin ? (
						<li>사용자 정보</li>
					) : (
						<li style={{ visibility: 'hidden' }}>사용자 정보</li>
					)}
				</StyledNav>
			</StyledHeader>
		</>
	);
};

export default Header;
