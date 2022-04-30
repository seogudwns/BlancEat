import React from 'react';
import * as Content from './styleContents';
import BmiCalculator from './BmiCalculator';

const ContentBMI = () => {
	return (
		<Content.StyledSection>
			<Content.StyledContents jc="center" ai="center" direction="column">
				<Content.StyledText size="1.5rem">
					당신은 얼마나 건강한 삶을 살고 계시나요?
				</Content.StyledText>
				<br />
				<Content.StyledText color="#6E726E" size="1.2rem" ta="center">
					아래 정보를 입력하여
					<br />
					가장 간단한 건강 지표 중 하나인
					<br />
					BMI 지수를 확인해 보세요.
				</Content.StyledText>
				<BmiCalculator />
			</Content.StyledContents>
		</Content.StyledSection>
	);
};

export default ContentBMI;
