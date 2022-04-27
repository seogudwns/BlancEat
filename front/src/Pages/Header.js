import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	width: 100%;
	background-color: #075f3a;
	font-family: 'Elice Digital Baeum';
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
	color: primary;
	font-size: 1rem;
	cursor: pointer;
`;
// color: #fcfbfa;

const StyledList = styled.li`
	font-size: 1rem;
	margin-left: 30px;
	visibility: ${props => (props.visibility ? props.visibility : 'visible')};
	cursor: pointer;
`;

const Header = () => {
	const isLogin = true;

	return (
		<>
			<StyledHeader>
				<StyledLogo>
					<Link to="/">
						<img src="/balanceatLogo.png" />
					</Link>
				</StyledLogo>
				<StyledNav flex="4" jc="flex-end">
					<StyledList>
						<Link to="/" style={{ textDecoration: 'none', color: '#fcfbfa' }}>
							메인페이지
						</Link>
					</StyledList>
					<StyledList>
						<Link to="/balanceat" style={{ textDecoration: 'none', color: '#fcfbfa' }}>
							BalancEat
						</Link>
					</StyledList>
					<StyledList>
						<Link to="/recommand" style={{ textDecoration: 'none', color: '#fcfbfa' }}>
							오늘 뭐 먹지?
						</Link>
					</StyledList>
					{isLogin ? (
						<StyledList>
							<Link
								to="/userpage"
								style={{ textDecoration: 'none', color: '#fcfbfa' }}
							>
								사용자페이지
							</Link>
						</StyledList>
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
