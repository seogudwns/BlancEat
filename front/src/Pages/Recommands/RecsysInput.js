import React, { useContext } from 'react';

// import { RecommandContext } from './RecommandContext';
import RecsysInputForm from './RecsysInputForm';
import ContentLabel from '../../Components/ContentLabel';
import { SubContainer, BGDiv } from '../../Contents/Styles/styleContents';

const RecsysInput = () => {
	const title = '식사 정보 입력';
	const subtitle = '정보를 입력해 주세요';
	return (
		<SubContainer fluid>
			<ContentLabel title={title} subtitle={subtitle} />
			<BGDiv>
				<RecsysInputForm />
			</BGDiv>
		</SubContainer>
	);
};

export default RecsysInput;
