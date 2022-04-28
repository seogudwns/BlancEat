import React from 'react';
import styled from 'styled-components';
const StyledContainer = styled.div`
	width: 100vw;
`;

const Userpage = ({ title }) => {
	return (
		<StyledContainer>
			<h1>this is {title}</h1>
		</StyledContainer>
	);
};
Userpage.defaultProps = { title: '유저페이지' };

export default Userpage;
