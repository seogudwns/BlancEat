import React from 'react';
import styled from 'styled-components';

const Main = () => {
	const StyledArticle = styled.div`
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: ${props => (props.height ? props.height : 'auto')};
		background-color: ${props => (props.color ? props.color : 'white')};
	`;

	const StyledContentDiv = styled.div`
		flex: ${props => (props.flex ? props.flex : 0)};
		width: ${props => (props.width ? props.width : 'auto')};
		height: ${props => (props.height ? props.height : 'auto')};
		background-color: ${props => (props.color ? props.color : 'white')};
	`;

	return (
		<>
			<StyledArticle height="500px" color="red">
				<StyledContentDiv flex="1" width="300px" height="300px" color="orange">
					This is Inner Article.
				</StyledContentDiv>
				<StyledContentDiv flex="1" width="300px" height="300px" color="yellow">
					This is Inner Article.
				</StyledContentDiv>
			</StyledArticle>
			<StyledArticle height="500px" color="green">
				<StyledContentDiv flex="1" width="300px" height="300px" color="orange">
					This is Inner Article.
				</StyledContentDiv>
				<StyledContentDiv flex="2" width="300px" height="300px" color="yellow">
					This is Inner Article.
				</StyledContentDiv>
			</StyledArticle>
			<StyledArticle height="500px" color="blue">
				<StyledContentDiv flex="1" width="300px" height="300px" color="orange">
					This is Inner Article.
				</StyledContentDiv>
				<StyledContentDiv flex="1" width="300px" height="300px" color="yellow">
					This is Inner Article.
				</StyledContentDiv>
				<StyledContentDiv flex="1" width="300px" height="300px" color="ivory">
					This is Inner Article.
				</StyledContentDiv>
			</StyledArticle>
		</>
	);
};

export default Main;
