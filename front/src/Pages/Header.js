import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ModalPortal from '../ModalPortal';

import React, { useState } from 'react';
import LoginForm from '../component/user/LoginForm';

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
	const isLogin = true;
	const [show, setShow] = useState(false);

	const createLink = (url, title) => {
		return (
			<Link to={url} style={{ textDecoration: 'none', color: '#fcfbfa' }}>
				{title}
			</Link>
		);
	};

	return (
		<>
			<StyledHeader>
				<StyledLogo>
					<Link to="/">
						<img src="/balanceatLogo.png" />
					</Link>
				</StyledLogo>
				<StyledNav flex="4" jc="flex-end">
					<StyledList>{createLink('/', '메인페이지')}</StyledList>
					<StyledList>{createLink('/balanceat', 'BalancEat')}</StyledList>
					<StyledList>오늘 뭐 먹지?</StyledList>
					{isLogin ? (
						<StyledList>사용자페이지</StyledList>
					) : (
						<StyledList visibility="hidden">사용자페이지</StyledList>
					)}
				</StyledNav>
				<StyledNav flex="1" jc="center">
					<StyledButton
						onClick={() => {
							setShow(true);
						}}
					>
						Sign in
					</StyledButton>
				</StyledNav>
			</StyledHeader>

			{show && <LoginForm show={show} setShow={setShow} />}
		</>
	);
};

export default Header;
