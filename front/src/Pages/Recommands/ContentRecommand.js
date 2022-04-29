import React, { useContext } from 'react';
import { RecommandContext } from './RecommandContext';

import { ImgBGContentContainer } from '../../Contents/Styles/styleContents';
import RecsysRequireInform from './RecsysRequireInform';
import RecsysInput from './RecsysInput';
import RecsysOutput from './RecsysOutput';
const ContentRecommand = () => {
	const { step, dispatch } = useContext(RecommandContext);
	return (
		<ImgBGContentContainer fluid>
			{step === 'IDLE' && <RecsysRequireInform />}
			{step === 'INPUT' && <RecsysInput />}
			{step === 'OUTPUT' && <RecsysOutput />}
		</ImgBGContentContainer>
	);
};

export default ContentRecommand;
