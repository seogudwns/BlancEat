import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	background-color: #075f3a;
`;

const StyledLogo = styled.div`
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;
	max-width: 200px;
	cursor: pointer;
`;

const StyledNav = styled.nav`
	flex: ${props => (props.flex ? props.flex : 0)};
	display: flex;
	justify-content: ${props => (props.jc ? props.jc : 'none')};
	align-items: center;
	list-style: none;
	color: #fcfbfa;
`;

const StyledButton = styled.button`
	width: 120px;
	height: 35px;
	background: transparent;
	border-radius: 5px;
	border: 1px solid #fcfbfa;
	color: #fcfbfa;
	font-size: 1rem;
	cursor: pointer;
`;

const StyledList = styled.li`
	font-size: 1rem;
	margin-left: 30px;
	visibility: ${props => (props.visibility ? props.visibility : 'visible')};
	cursor: pointer;
`;

const Header = () => {
	const isLogin = false;

	return (
		<>
			<StyledHeader>
				<StyledLogo>
					<img src="/balanceatLogo.png" />
				</StyledLogo>
				<StyledNav flex="4" jc="flex-end">
					<StyledList>메인페이지</StyledList>
					<StyledList>BalancEat</StyledList>
					<StyledList>오늘 뭐 먹지?</StyledList>
					{isLogin ? (
						<StyledList>사용자페이지</StyledList>
					) : (
						<StyledList visibility="hidden">사용자페이지</StyledList>
					)}
				</StyledNav>
				<StyledNav flex="1" jc="center">
					<StyledButton>Sign in</StyledButton>
				</StyledNav>
			</StyledHeader>
		</>
	);
};

export default Header;
