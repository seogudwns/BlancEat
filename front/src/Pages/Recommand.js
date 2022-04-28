import React from 'react';
import styled from 'styled-components';
import ContentRecommandOutput from '../Contents/ContentRecommandOutput';

const StyledContainer = styled.div`
	width: 100vw;
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	height: 100vh;
	width: 1440px;
	margin: auto;
	padding-top: 100px;
	flex-direction: column;
`;

const Recommand = () => {
	return (
		<Container>
			<h1>this is Recommand</h1>
			<ContentRecommandOutput />
		</Container>
	);
};

export default Recommand;
