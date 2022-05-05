import React, { createContext, useContext, useState } from 'react';

import * as Api from '../../Commons/Api';
import { useRecoilValue } from 'recoil';
import { RecommandContext } from './RecommandContext';
import RecsysRequireInform from './RecsysRequireInform';
import RecsysInput from './RecsysInput';
import RecsysOutput from './RecsysOutput';
import RecsysOutputAddon from './RecsysOutputAddon';

import { ImgBGContentContainer } from '../../Contents/Styles/styleContents';
import { RecommandStates, ValidateArray } from '../../Commons/consts';
import NutInfoParser from './NutInfoParser';
import { FOODNUTS } from './foodlist';
import { loginState, userIdState } from '../User/UserAtom';
export const FoodDataContext = createContext();

const ContentRecommand = () => {
	const [foodData, setFoodData] = useState([]);
	const { step } = useContext(RecommandContext);
	const userId = useRecoilValue(userIdState); //userId.
	const isLogin = useRecoilValue(loginState); //로긴되었는가 불린값

	/*TODO : api functions */

	/*입력데이터 전송후 결과 수신 */
	const postData = async (inputData = []) => {
		// const postData = (inputData = []) => {
		// 수신된 데이터를 더미데이터 FOODNUTS로 가정하고 일단 구현
		if (ValidateArray(inputData)) {
			console.log('postData, input: ', inputData);
			const sendData = {
				age: 18,
				sex: 'F',
				weight: 60,
				foodList: inputData,
			};
			const result = await Api.post('nutrition/', sendData);
			console.log('-------------------------');
			console.log(result);
			if (result.status === 200) {
				const { data } = result;
				// const resultMSG = data.result[0];
				const rawArr = data.result;
				const RecFoodList = [];
				for (const food of rawArr) {
					console.log(food);
					RecFoodList.push(NutInfoParser(food));
				}
				console.log(RecFoodList);
				setFoodData(RecFoodList);

				return true;
			}
		}

		return false;
	};

	/* 음식정보입력시 취급품목인지 validation, Debouncing */
	const getSuggestFoodList = async ({ foodList }) => {
		console.log('getSuggestFoodList');
		const sendData = {
			age: 18,
			sex: 'F',
			weight: 60,
			foodList: ['불고기피자'],
		};
		/*return 검색어가 포함된 음식정보 10종 이하, 없을 경우 는 취급 안하는 품목 */
		const result = await Api.post('nutrition/', sendData);
		console.log(result);
	};

	return (
		<FoodDataContext.Provider value={{ foodData, setFoodData, postData, getSuggestFoodList }}>
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
