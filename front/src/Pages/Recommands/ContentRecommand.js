import React, { createContext, useContext, useState } from 'react';

import { RecommandContext } from './RecommandContext';
import RecsysRequireInform from './RecsysRequireInform';
import RecsysInput from './RecsysInput';
import RecsysOutput from './RecsysOutput';
import RecsysOutputAddon from './RecsysOutputAddon';

import { ImgBGContentContainer } from '../../Contents/Styles/styleContents';

export const FoodDataContext = createContext();

const ContentRecommand = () => {
	const [foodData, setFoodData] = useState([]);
	const { step } = useContext(RecommandContext);
	return (
		<FoodDataContext.Provider value={{ foodData, setFoodData }}>
			<ImgBGContentContainer fluid>
				{step === 'IDLE' && <RecsysRequireInform />}
				{step === 'INPUT' && <RecsysInput />}
				{step === 'OUTPUT' && <RecsysOutput />}
			</ImgBGContentContainer>
			{step === 'OUTPUT' && <RecsysOutputAddon />}
		</FoodDataContext.Provider>
	);
};

export default ContentRecommand;
