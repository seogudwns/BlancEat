import React, { useContext, useState, useEffect } from 'react';

import { Formik, Form, Field, useFormik } from 'formik';
import { RecommandContext } from './RecommandContext';
import { FoodDataContext } from './ContentRecommand';
import { Alert } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { loginState } from '../User/UserAtom';

import { RecsysInputFormStyle } from './FormikTagsInputStyle';
import Button from '../../Components/Button';
import TagInput from './TagInput';
import Loader from '../../Components/Loading';

const RecsysInputForm = () => {
	//age, sex, weight get by userInfo FoodDataContext => formik handling
	const [breakfast, setBreakfast] = useState([]);
	const [lunch, setLunch] = useState([]);
	const [dinner, setDinner] = useState([]);
	const [snack, setSnack] = useState([]);
	const [showAlert, setShowAlert] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [alertMessage, setAlertMessage] = useState('');
	const { dispatch } = useContext(RecommandContext);
	const { postData, userInfo } = useContext(FoodDataContext);
	const isLogin = useRecoilValue(loginState); //로긴되었는가 불린값

	const ALERT_TYPE = {
		EMPTY: 'EMPTY',
		FULLFILLED: 'FULLFILLED',
	};
	const ALERT_MESSAGE = {
		EMPTY: '식사 정보가 입력되지 않았습니다. 정보를 입력해주세요.',
		FULLFILLED: '항목 당 최대 4개의 품목만 입력할 수 있습니다.',
	};
	const formik = useFormik({
		initialValues: { age: userInfo.age, sex: userInfo.sex, weight: userInfo.weight },
	});

	const alertHandler = type => {
		setAlertMessage(ALERT_MESSAGE[type]);
		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 3000);
	};

	/* 입력데이터 post, 결과 data get */
	const handleClickSubmit = async () => {
		//로딩상태 활성화, 버튼 비활성화
		setIsLoading(true);

		if (
			Array.isArray(breakfast) &&
			breakfast.length === 0 &&
			Array.isArray(lunch) &&
			lunch.length === 0 &&
			Array.isArray(dinner) &&
			dinner.length === 0 &&
			Array.isArray(snack) &&
			snack.length === 0
		) {
			/* 데이터가 입력되지 않은 경우 처리 */
			console.log('input empty');
			alertHandler('EMPTY');
		} else {
			const dataSet = {
				age: formik.values.age,
				sex: formik.values.sex,
				weight: formik.values.weight,
				breakfast: breakfast.map(el => el.text),
				lunch: lunch.map(el => el.text),
				dinner: dinner.map(el => el.text),
				snack: snack.map(el => el.text),
			};
			//const foodList = dataSet.map(el => el.text);
			console.log('RECSYS INPUT FORM CHECK LIST : ', dataSet);

			if (await postData(dataSet)) {
				//성공시 다음 단계.
				dispatch({ type: 'OUTPUT' });
			} else {
				//실패시 에러 처리단계... try catch?
			}
		}
		setIsLoading(false);
	};
	const handleClickCancel = () => {
		dispatch({ type: 'RESET' });
	};
	const dataHandlerBreakfast = arr => {
		setBreakfast([...arr]);
	};
	const dataHandlerLunch = arr => {
		setLunch([...arr]);
	};
	const dataHandlerDinner = arr => {
		setDinner([...arr]);
	};
	const dataHandlerSnack = arr => {
		setSnack([...arr]);
	};
	//나이/성별/몸무게

	return (
		<RecsysInputFormStyle>
			<Formik
				enableReinitialize
				onSubmit={(values, actions) => handleSubmit(values, actions)}
			>
				{FormikProps => (
					<Form className="infoContainer">
						<div>기본 정보 </div>
						<Field
							type="text"
							id="age"
							placeholder="나이"
							disabled={isLogin}
							{...formik.getFieldProps('age')}
						/>
						<div role="group" aria-labelledby="my-radio-group">
							<label>
								<Field
									type="radio"
									id="sex"
									name="sex"
									value="M"
									disabled={isLogin}
									checked={formik.values.sex === 'M'}
									onChange={formik.getFieldProps('sex').onChange}
								/>
								남성
							</label>
							<label>
								<Field
									type="radio"
									id="sex"
									name="sex"
									value="F"
									disabled={isLogin}
									checked={formik.values.sex === 'F'}
									onChange={formik.getFieldProps('sex').onChange}
								/>
								여성
							</label>
						</div>
						<Field
							id="text"
							name="weight"
							placeholder="몸무게"
							disabled={isLogin}
							{...formik.getFieldProps('weight')}
						/>
					</Form>
				)}
			</Formik>
			<div className="infoContainer">
				<label> 아 침 </label>
				<TagInput alertHandler={alertHandler} dataHandler={dataHandlerBreakfast} />
			</div>
			<br />
			<div className="infoContainer">
				<label> 점 심 </label>
				<TagInput alertHandler={alertHandler} dataHandler={dataHandlerLunch} />
			</div>
			<br />
			<div className="infoContainer">
				<label> 저 녁 </label>
				<TagInput alertHandler={alertHandler} dataHandler={dataHandlerDinner} />
			</div>
			<br />
			<div className="infoContainer">
				<label> 간 식 </label>
				<TagInput alertHandler={alertHandler} dataHandler={dataHandlerSnack} />
			</div>
			<br />
			{showAlert && (
				<Alert variant="info" className="footer">
					<h5>{alertMessage}</h5>
					<hr />
					<div className="d-flex justify-content-end">
						<Button fullWidth size="small" onClick={() => setShowAlert(false)}>
							확 인
						</Button>
					</div>
				</Alert>
			)}
			<div className="footer">
				<Button variant="outline-warning" onClick={handleClickCancel} disabled={isLoading}>
					취소
				</Button>

				<Button variant="outline-success" onClick={handleClickSubmit} disabled={isLoading}>
					완료
				</Button>
			</div>
			{isLoading && <Loader type="spokes" color="#66ff99" message="Loading" />}
		</RecsysInputFormStyle>
	);
};

export default RecsysInputForm;
// {isLoading && <ReactLoading type="Spoke" color="white" />}
// <ReactLoading type="spokes" color="#FF00FF" height={'20%'} width={'20%'} />
