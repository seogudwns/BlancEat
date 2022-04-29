import * as s from './Styles/styleContentLabel';

const ContentLabel = ({ title, subtitle }) => {
	return (
		<s.AssetContainer fluid>
			<s.LabelContainer>
				<s.TitleWrapper>
					<s.LabelTitle>{title}</s.LabelTitle>
				</s.TitleWrapper>
				<s.LabelText>{subtitle}</s.LabelText>
			</s.LabelContainer>
		</s.AssetContainer>
	);
};

ContentLabel.defaultProps = {
	title: '레이블 타이틀',
	subtitle: '지금 당신에게 필요한 식사',
};

export default ContentLabel;
