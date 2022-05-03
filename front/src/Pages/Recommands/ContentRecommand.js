import React, { createContext, useContext, useState } from 'react';

import { RecommandContext } from './RecommandContext';
import RecsysRequireInform from './RecsysRequireInform';
import RecsysInput from './RecsysInput';
import RecsysOutput from './RecsysOutput';
import RecsysOutputAddon from './RecsysOutputAddon';

import { ImgBGContentContainer } from '../../Contents/Styles/styleContents';
import { RecommandStates, ValidateArray } from '../../Commons/consts';
import NutInfoParser from './NutInfoParser';
import { FOODNUTS } from './foodlist';
export const FoodDataContext = createContext();

const ContentRecommand = () => {
	const [foodData, setFoodData] = useState([]);
	const { step } = useContext(RecommandContext);
	/*TODO : api functions */

	/*입력데이터 전송후 결과 수신 */
	//const postData = async (inputData = []) => {
	const postData = (inputData = []) => {
		//수신된 데이터를 더미데이터 FOODNUTS로 가정하고 일단 구현
		if (ValidateArray(inputData)) {
			console.log('postData, input: ', inputData);
		}

		//송수신 아직 미구현
		//receiveData = await API.post(inputData);
		const foodList = new Array();
		let i = 0;
		for (const data of FOODNUTS) {
			console.log(data);
			foodList.push(NutInfoParser(data));
			// FoodList.push(NutInfoParser(data));
		}
		/*send */
		/* return 추천음식3종 + 사용자 영양정보 */
		//입력된 데이터 parsing, 구조화.

		// const newData = NutInfoParser(foodData);
		console.log(foodList);
		setFoodData(foodList);
		// console.log(foodData);

		return true;
	};

	/* 음식정보입력시 취급품목인지 validation, Debouncing */
	const checkFoodItem = () => {
		/*return 검색어가 포함된 음식정보 10종 이하, 없을 경우 는 취급 안하는 품목 */
	};
	return (
		<FoodDataContext.Provider value={{ foodData, setFoodData, postData }}>
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
