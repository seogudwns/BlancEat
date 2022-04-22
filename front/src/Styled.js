import styled from 'styled-components';

export const FlexParent = styled.div`
	display: flex;
	justify-content: ${props => (props.jc ? props.jc : 'auto')};
	align-items: ${props => (props.ai ? props.ai : 'auto')};
	width: ${props => (props.width ? props.width : 'auto')};
	height: ${props => (props.height ? props.height : 'auto')};
	background-color: ${props => (props.divColor ? props.divColor : 'none')};
`;
