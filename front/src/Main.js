import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.div`
	display: flex;
	justify-content: ${props => (props.jc ? props.jc : 'none')};
	align-items: ${props => (props.ai ? props.ai : 'none')};
	width: 100%;
	height: ${props => (props.height ? props.height : 'auto')};
	background-color: ${props => (props.color ? props.color : 'none')};
	margin: ${props => (props.margin ? props.margin : 'none')};
`;

const StyledContentDiv = styled.div`
	flex: ${props => (props.flex ? props.flex : 0)};
	width: ${props => (props.width ? props.width : 'auto')};
	height: ${props => (props.height ? props.height : 'auto')};
	background-color: ${props => (props.color ? props.color : 'none')};
	margin: ${props => (props.margin ? props.margin : 'none')};
`;

const Main = () => {
	return (
		<>
			<StyledArticle height="940px" margin="auto">
				어떻게 드시고 계신가요?
			</StyledArticle>
			<StyledArticle height="500px" jc="space-around" ai="center" color="green">
				<StyledContentDiv flex="1" width="300px" height="300px" color="orange">
					This is Inner Article.
				</StyledContentDiv>
				<StyledContentDiv flex="2" width="300px" height="300px" color="yellow">
					This is Inner Article.
				</StyledContentDiv>
			</StyledArticle>
			<StyledArticle height="500px" jc="space-around" ai="center" color="blue">
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
