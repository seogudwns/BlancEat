import React, { useContext } from 'react';
import { RecommandContext } from './RecommandContext';

import ContentLabel from '../../Components/ContentLabel';
import { SubContainer, BGDiv, LargeText, LargeButton } from '../../Contents/Styles/styleContents';

const RecsysRequireInform = () => {
	const { step, dispatch } = useContext(RecommandContext);

	const handleClick = () => {
		console.log('Click btn 스테이트 INPUT 으로 변경');
		dispatch({ type: 'INPUT' });
	};
	return (
		<SubContainer fluid>
			<ContentLabel />
			<BGDiv>
				<LargeText>
					24시간동안 드신 식사 정보를 입력해주세요 당신에게 필요한 식사를 추천해 드립니다.
				</LargeText>

				<LargeButton variant="success" onClick={handleClick}>
					<h3>식사 정보 입력하기 {'>'}</h3>
				</LargeButton>
			</BGDiv>
		</SubContainer>
	);
};

export default RecsysRequireInform;
