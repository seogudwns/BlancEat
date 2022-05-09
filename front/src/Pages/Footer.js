import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
	height: 120px;
	padding: 20px;
	font-size: 1rem;
	line-height: 2rem;
	background-color: #3b3d3b;
`;

const StyledText = styled.div`
	text-align: ${props => (props.ta ? props.ta : 'none')};
	color: ${props => (props.color ? props.color : 'none')};
`;

const Footer = () => {
	return (
		<StyledFooter>
			<StyledText ta="left" color="#c8c8c8">
				Contact Us
				<br />
				이메일 : elice4thdata@gmail.com
			</StyledText>
			<StyledText ta="right" color="#6e726e">
				License 투머치코더
			</StyledText>
		</StyledFooter>
	);
};

export default Footer;
