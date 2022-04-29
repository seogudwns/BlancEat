import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

/* Styles of Contents */

/* ContentRecommand */
export const ContentContainer = styled(Container)`
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

export const ImgBGContentContainer = styled(Container)`
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

/* ContentRequireInform.js*/

export const SubContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: auto;
	margin: 0;
	padding: 1rem;
`;
export const BGDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1192px;
	height: 640px;
	margin: 0;
	padding: 0;
	background-color: rgba(252, 251, 250, 0.45); ;
`;
export const LargeText = styled.p`
	width: 578px;
	height: 76px;
	left: 313px;
	top: 222px;

	/* NanumSquare/H2 */

	font-family: 'NanumSquare';
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 120%;
	/* or 38px */

	display: flex;
	align-items: center;
	text-align: center;

	/* Gray/600 */

	color: #3b3d3b;

	margin: 222px 312px 90px 312px;
`;
export const LargeButton = styled(Button)`
	width: 277px;
	height: 57px;
	color: white;
	line-height: 50px;
	text-align: center;
	background: #075f3a;
	border-radius: 28px;
	padding: 14px 28px;

	h3 {
		font-family: 'Nanum Square';
		line-height: 120%;
		letter-spacing: 0.5px;
		font-family: 'NanumSquare';

		font-weight: 700;
		font-size: 24px;
		line-height: 120%;
	}
`;
