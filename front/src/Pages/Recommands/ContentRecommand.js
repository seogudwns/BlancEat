import React, { useState, useContext } from 'react';

import { ImgBGContentContainer } from '../../Contents/Styles/styleContents';
import RecsysRequireInform from './RecsysRequireInform';

const ContentRecommand = () => {
	const [step, setStep] = useState('IDLE');
	return (
		<ImgBGContentContainer fluid>
			{step === 'IDLE' && <RecsysRequireInform />}
		</ImgBGContentContainer>
	);
};

export default ContentRecommand;
