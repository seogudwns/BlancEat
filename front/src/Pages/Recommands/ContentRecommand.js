import React, { useContext } from 'react';

import { RecommandContext } from './RecommandContext';
import RecsysRequireInform from './RecsysRequireInform';
import RecsysInput from './RecsysInput';
import RecsysOutput from './RecsysOutput';
import { ImgBGContentContainer } from '../../Contents/Styles/styleContents';

const ContentRecommand = () => {
	const { step } = useContext(RecommandContext);
	return (
		<ImgBGContentContainer fluid>
			{step === 'IDLE' && <RecsysRequireInform />}
			{step === 'INPUT' && <RecsysInput />}
			{step === 'OUTPUT' && <RecsysOutput />}
		</ImgBGContentContainer>
	);
};

export default ContentRecommand;
