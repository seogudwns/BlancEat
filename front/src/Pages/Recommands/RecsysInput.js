import React, { useContext } from 'react';
import { RecommandContext } from './RecommandContext';

import ContentLabel from '../../Components/ContentLabel';
import { SubContainer, BGDiv, LargeText, LargeButton } from '../../Contents/Styles/styleContents';

const RecsysInput = () => {
	const { step, dispatch } = useContext(RecommandContext);

	const handleClick = () => {
		dispatch({ type: 'OUTPUT' });
	};
	return (
		<SubContainer fluid>
			<ContentLabel />
			<BGDiv>
				<LargeText>인풋창입니다.</LargeText>

				<LargeButton variant="success" onClick={handleClick}>
					<h3>정보입력 완료 {'>'}</h3>
				</LargeButton>
			</BGDiv>
		</SubContainer>
	);
};

export default RecsysInput;
