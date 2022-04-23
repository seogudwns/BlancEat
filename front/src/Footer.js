import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
	width: 100%;
	height: 10%;
	color: #aeb5bc;
	font-size: 0.8rem;
	line-height: 1.5rem;
`;

const Footer = () => {
	return (
		<StyledFooter>
			CONTACT | elice4thdata@gmail.com
			<br />
			TELEPHONE | 070-1234-5678
			<br />
			Copyright ⓒ 2022 - 2022 BalancEat. All rights reserved.
		</StyledFooter>
	);
};

export default Footer;
