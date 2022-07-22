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
	background-color: ${props => props.theme.surface_color};
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
	background-color: ${props => props.theme.white_45};
`;
export const LargeText = styled.p`
	width: 36.125rem;
	height: 4.75rem;
	left: 19.75rem;
	top: 13.875rem;

	/* NanumSquare/H2 */

	font-family: 'NanumSquare';
	font-style: bold;
	font-weight: 700;
	font-size: 2rem;
	line-height: 150%;

	display: flex;
	align-items: center;
	text-align: center;

	/* Gray/600 */

	color: ${props => props.theme.gray_600};

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
		font-family: ${props => props.theme.heading_font_family};
		line-height: 120%;
		letter-spacing: 0.5px;

		font-weight: 700;
		font-size: 24px;
		line-height: 120%;
	}
`;

export const CardContainerRow = styled(Container)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
	margin-top: 50px;
	margin-bottom: 50px;
	padding: 0;
`;

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 900px;
	height: 500px;
	margin-top: 50px;
	padding: 50px;
	background-color: white;
`;
