import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap';

import ContentLabel from '../Components/ContentLabel';

const SubContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: auto;
	margin: 0;
	padding: 1rem;
`;
const BGDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 1192px;
	height: 640px;
	margin: 0;
	padding: 0;
	background-color: rgba(252, 251, 250, 0.45); ;
`;
const LargeText = styled.p`
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
const LargeButton = styled(Button)`
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

const ContentRequireInform = () => {
	return (
		<SubContainer fluid>
			<ContentLabel />
			<BGDiv>
				<LargeText>
					24시간동안 드신 식사 정보를 입력해주세요 당신에게 필요한 식사를 추천해 드립니다.
				</LargeText>

				<LargeButton variant="success">
					<h3>식사 정보 입력하기 {'>'}</h3>
				</LargeButton>
			</BGDiv>
		</SubContainer>
	);
};

export default ContentRequireInform;
