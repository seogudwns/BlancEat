import {
	AssetContainer,
	LabelContainer,
	TitleWrapper,
	LabelTitle,
	LabelText,
} from './Styles/styleContentLabel';

const ContentLabel = ({ title, subtitle, subtitleColor }) => {
	return (
		<AssetContainer fluid>
			<LabelContainer>
				<TitleWrapper>
					<LabelTitle>{title}</LabelTitle>
				</TitleWrapper>
				<LabelText color={subtitleColor}>{subtitle}</LabelText>
			</LabelContainer>
		</AssetContainer>
	);
};

ContentLabel.defaultProps = {
	title: '레이블 타이틀',
	subtitle: '지금 당신에게 필요한 식사',
	subtitleColor: '#765413',
};

export default ContentLabel;
