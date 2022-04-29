import styled from 'styled-components';
import { Container } from 'react-bootstrap';

import Card from '../Components/Card';
import MyCard from '../Components/MyCard';
import ContentRequireInform from './ContentRequireInform';
const ImgBGContentContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 1072px;
	margin: 0;
	margin-top: auto;
	padding: 1rem;

	background-image: url('/requireInformation.png');
	background-size: cover; // 사이즈가 container에 맞지 않아도 꽉 차도록 채운다.
	background-repeat: no-repeat; // background-image가 컨테이너를 가득 채우지 못할 경우에도 반복하지 않는다.
`;
// padding-top: 100%; /* 1:1 ratio */
// background-position: center; // background-image가 컨테이너에 가운데로 오도록 한다.

const ContentRecommand = () => {
	return (
		<ImgBGContentContainer fluid>
			<ContentRequireInform />
		</ImgBGContentContainer>
	);
};

export default ContentRecommand;
/*
background-image: url(https://mdn.mozillademos.org/files/8971/firefox_logo.png);
  background-size: contain;
*/
