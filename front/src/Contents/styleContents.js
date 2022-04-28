import styled from 'styled-components';

export const StyledContents = styled.div`
	display: flex;
	flex-direction: ${props => (props.direction ? props.direction : 'none')};
	justify-content: ${props => (props.jc ? props.jc : 'none')};
	align-items: ${props => (props.ai ? props.ai : 'none')};
	flex: ${props => (props.flex ? props.flex : 'none')};
	width: 100%;
	height: 100%;
`;
export const StyledText = styled.div`
	text-align: ${props => (props.ta ? props.ta : 'none')};
	color: ${props => (props.color ? props.color : 'none')};
	font-size: ${props => (props.size ? props.size : 'none')};
`;
export const StyledSection = styled.div`
	display: flex;
	height: 646px;
	max-width: 1440px;
	object-fit: contain;
	background-image: url(${props => (props.bgImage ? props.bgImage : 'none')});
	background-repeat: no-repeat;
	background-position: center center;
	background-size: 100% 100%;
`;

export const StyledImageButton = styled.div`
	width: 20px;
	height: 20px;
	background-color: ${props => props.color};
	border: 2px solid white;
	border-radius: 50%;
	margin: 10px;
	margin-bottom: 20px;
	cursor: pointer;
`;

export const StyledteamContainer = styled.div`
	border: 2px solid black;
	display: flex;
	flex-direction: column;
	margin-top: 100px;
	background-color: gray;
`;
export const CenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
// width: 1440px;
export const StyledToomuchBox = styled.h1`
	margin-left: 30px;
	padding: 10px 50px 0px 50px;
	background-color: green;
	color: white;
`;

export const StyledToomuchText = styled.h1`
	padding: 10px 50px 0px 50px;
	color: white;
`;
export const StyledTeamBox = styled.div`
	display: inline-flex;
	width: 92%;
	border: 1px solid black;
	margin: 30px;
	height: 60px;
`;
