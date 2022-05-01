import React, { createContext, useContext, useState } from 'react';

import { RecommandContext } from './RecommandContext';
import RecsysRequireInform from './RecsysRequireInform';
import RecsysInput from './RecsysInput';
import RecsysOutput from './RecsysOutput';
import RecsysOutputAddon from './RecsysOutputAddon';

import { ImgBGContentContainer } from '../../Contents/Styles/styleContents';
import { RecommandStates } from '../../Commons/consts';
import NutInfoParser from './NutInfoParser';
export const FoodDataContext = createContext();

const ContentRecommand = () => {
	const [foodData, setFoodData] = useState([]);
	const { step } = useContext(RecommandContext);
	/*TODO : api functions */

	/*입력데이터 전송후 결과 수신 */
	const postData = () => {
		/*send */
		/* return 추천음식3종 + 사용자 영양정보 */
		//입력된 데이터 parsing, 구조화.

		const newData = NutInfoParser(foodData);
	};

	/* 음식정보입력시 취급품목인지 validation, Debouncing */
	const checkFoodItem = () => {
		/*return 검색어가 포함된 음식정보 10종 이하, 없을 경우 는 취급 안하는 품목 */
	};
	return (
		<FoodDataContext.Provider value={{ foodData, setFoodData }}>
			<ImgBGContentContainer fluid>
				{step === RecommandStates.IDLE && <RecsysRequireInform />}
				{step === RecommandStates.INPUT && <RecsysInput />}
				{step === RecommandStates.OUTPUT && <RecsysOutput />}
			</ImgBGContentContainer>
			{step === RecommandStates.OUTPUT && <RecsysOutputAddon />}
		</FoodDataContext.Provider>
	);
};

export default ContentRecommand;
