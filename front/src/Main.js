import React from 'react';
import styled from 'styled-components';

const Main = () => {
	const StyledArticle = styled.div`
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: ${props => (props.height ? props.height : 'auto')};
		background-color: ${props => (props.color ? props.color : 'white')};
	`;

	return (
		<StyledArticle height="500px" color="blue">
			Hi
		</StyledArticle>
	);
};

export default Main;
