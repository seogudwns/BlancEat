import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

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
		justify-content: space-between;
		align-items: center;
	`;

	const StyledUserMenu = styled.nav`
		flex: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`;

	return (
		<>
			<StyledHeader>
				<StyledLogo>This is Logo</StyledLogo>
				<StyledMenu>
					<Link to="/balancEat">This is Menu</Link>
				</StyledMenu>
				<StyledUserMenu>This is User</StyledUserMenu>
			</StyledHeader>
		</>
	);
};

export default Header;
