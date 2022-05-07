import React, { createContext, useContext, useState } from 'react';

import * as Api from '../../Commons/Api';
import { useRecoilValue } from 'recoil';
import { RecommandContext } from './RecommandContext';
import RecsysRequireInform from './RecsysRequireInform';
import RecsysInput from './RecsysInput';
import RecsysOutput from './RecsysOutput';
import RecsysOutputAddon from './RecsysOutputAddon';

import { ImgBGContentContainer } from '../../Contents/Styles/styleContents';
import { RecommandStates, isEmptyObj } from '../../Commons/consts';
import NutInfoParser from './NutInfoParser';
// import { FOODNUTS } from './foodlist';
import { userIdState, loginState } from '../User/UserAtom';
export const FoodDataContext = createContext();

const ContentRecommand = () => {
	const [foodData, setFoodData] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const { step } = useContext(RecommandContext);
	const userId = useRecoilValue(userIdState); //userId.
	const isLogin = useRecoilValue(loginState); //로긴되었는가 불린값

	/*입력데이터 전송후 결과 수신 */
	const postData = async (inputData = {}) => {
		if (inputData) {
			//빈배열, 빈문자열 처리
			const sendData = {
				age: inputData.age || 25,
				sex: inputData.sex || 'F',
				weight: inputData.weight || 60,
				breakfast: inputData.breakfast.length !== 0 ? inputData.breakfast : [''],
				lunch: inputData.lunch.length !== 0 ? inputData.lunch : [''],
				dinner: inputData.dinner.length !== 0 ? inputData.dinner : [''],
				snack: inputData.snack.length !== 0 ? inputData.snack : [''],
			};
			console.log('로그인 체크', isLogin);
			let result = null;
			if (isLogin) {
				console.log('로그인 사용자 음식추천 요청');
				result = await Api.post('nutrition/', sendData);
			} else {
				console.log('비로그인 사용자 음식추천 요청');
				result = await Api.getRecsys('nutrition', sendData);
			}

			console.log('-------------------------');
			console.log(result);
			if (result.status > 99 && result.status < 300) {
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

	//검색안된경우에도 500번이 떨어짐. 예외처리가 필요
	//검색 성공의 경우 >>
	//결과 길이 확인 >
	//음식이름만 추출 , 최대 추천갯수까지만 >
	//서제스트 리스트 그리기
	//키워드 눌리지 않았을경우 다음번 요청시점 도착시 재요청

	//검색 실패의 경우
	//일치하는 음식 정보가 없습니다. 표시
	//디바운싱 텀에 따라 다음번 요청시점까지 대기.

	/* 음식정보입력시 취급품목인지 validation, Debouncing */
	const getSuggestFoodList = async keyword => {
		console.log('컨텐트 리커멘드, getSuggestFoodList', keyword);
		let timeStart = new Date().getTime();
		try {
			/*return 검색어가 포함된 음식정보 10종 이하, 없을 경우 는 취급 안하는 품목 */
			const result = await Api.getSuggest('nutrition_search', keyword);

			console.log('수신결과 : ', result);
			makeSuggestList(result.data);
		} catch (err) {
			console.error(err);
			/*검색결과 받지 못해도 없다는 표시 처리 */
			//to - do . 다른 방식으로 처리해야함.
			//키워드와 일치 하지 않아 표시되지 않음
			makeSuggestList(null);
		}
		let timeEnd = new Date().getTime();
		console.log('데이터 수신 소요시간 : ', (timeEnd - timeStart) / 1000);
	};
	/*서버에서 받은 키워드 검색결과 정보를  */
	const makeSuggestList = rawData => {
		if (rawData) {
			const suggestList = rawData.map(el => {
				return { id: el._id, text: el.foodName };
			});
			console.log(suggestList);
			setSuggestions(suggestList);
		} else {
			/*검색 결과 없는 경우 */
			const suggestList = [{ id: '0', text: 'Not Founded...' }];
			console.log(suggestList);
			setSuggestions(suggestList);
		}
	};

	return (
		<FoodDataContext.Provider
			value={{
				foodData,
				suggestions,
				setSuggestions,
				setFoodData,
				postData,
				getSuggestFoodList,
			}}
		>
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
