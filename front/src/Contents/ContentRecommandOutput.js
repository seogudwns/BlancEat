import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Card from '../Components/Card';
import MyCard from '../Components/MyCard';

const ContentContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 1072px;
	margin: 0;
	margin-top: auto;
	padding: 1rem;
	background-color: gray;
`;

const ContentRecommandOutput = () => {
	return (
		<ContentContainer fluid>
			<Card />
		</ContentContainer>
	);
};

export default ContentRecommandOutput;
