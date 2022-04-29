import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const AssetContainer = styled(Container)`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	height: 45px;
	margin: 48px 0;
	padding: 0px;
`;

const LabelWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	min-width: 600px;
	height: 45px;
	margin: 0 0 0 92px;
	padding: 0;
`;
const LabelArea = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-width: 280px;
	height: 58px;
	padding: 0 20px;
	color: white;
	background-color: #023d1a;
`;
const LabelTitle = styled.h2`
	font-family: 'Elice Digital Baeum';
	font-size: 2rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 0.5px;
	align: center;
	margin: 0;
`;

const LabelText = styled.h2`
	font-family: 'Elice Digital Baeum';
	font-size: 2rem;
	font-weight: 400;
	line-height: 120%;
	letter-spacing: 0.5px;
	color: #765413;
	align: center;
	margin: 0 0 0 18px;
`;
const ContentLabel = ({ title, subtitle }) => {
	return (
		<AssetContainer fluid>
			<LabelWrapper>
				<LabelArea>
					<LabelTitle>{title}</LabelTitle>
				</LabelArea>
				<LabelText>{subtitle}</LabelText>
			</LabelWrapper>
		</AssetContainer>
	);
};

ContentLabel.defaultProps = {
	title: '레이블 타이틀',
	subtitle: '지금 당신에게 필요한 식사',
};

export default ContentLabel;
