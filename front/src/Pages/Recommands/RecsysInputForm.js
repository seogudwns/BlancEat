import React, { useContext, useState } from 'react';

import { RecommandContext } from './RecommandContext';
import { FoodDataContext } from './ContentRecommand';
import { InputGroup, Col, Row, Alert } from 'react-bootstrap';
import { FormContainer } from '../../Contents/Styles/styleContents';
import Button from '../../Components/Button';
import TagInput from './TagInput';
// import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
// import FormikTagInput from './FormikTagInput';

const RecsysInputForm = () => {
	const [breakfast, setBreakfast] = useState([]);
	const [lunch, setLunch] = useState([]);
	const [dinner, setDinner] = useState([]);
	const [snack, setSnack] = useState([]);
	const [showAlert, setShowAlert] = useState(false);
	const { dispatch } = useContext(RecommandContext);
	const { postData } = useContext(FoodDataContext);

	/* 입력데이터 post, 결과 data get */
	const handleClickSubmit = async () => {
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
			//return <></>;
			setShowAlert(true);
		} else {
			const dataSet = [...breakfast, ...lunch, ...dinner, ...snack];
			const foodList = dataSet.map(el => el.text);
			console.log('RECSYS INPUT FORM CHECK LIST : ', foodList);

			if (await postData(foodList)) {
				//성공시 다음 단계.
				dispatch({ type: 'OUTPUT' });
			} else {
				//실패시 에러 처리단계... try catch?
			}
		}
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
	/*
<Field name="careerPositionKeywords">
{({}) => (
<ReactTagInput
className="py-5"
tags={keywords} // useState
placeholder="키워드를 쉼표 (,) 로 구분하여 입력해주세요."
separatorKeys={[',']}
readOnly={false}
removeOnBackspace
onChange={(keyword) => setKeywords(keyword)}
/>
)}
</Field>
*/
	return (
		<div>
			{/* <Field name="foodTagInput"> */}
			<TagInput dataHandler={dataHandlerBreakfast} />
			{/* </Field> */}

			<br />

			<TagInput dataHandler={dataHandlerLunch} />

			<br />
			{/* <FormikTagInput /> */}
			<TagInput dataHandler={dataHandlerDinner} />

			<br />

			<TagInput dataHandler={dataHandlerSnack} />

			<br />
			{showAlert && (
				<Alert variant="info">
					식사 정보가 입력되지 않았습니다. 정보를 입력해주세요.
					<hr />
					<div className="d-flex justify-content-end">
						<Button fullWidth size="small" onClick={() => setShowAlert(false)}>
							확 인
						</Button>
					</div>
				</Alert>
			)}
			<Row>
				<Col>
					<Button variant="outline-warning" onClick={handleClickCancel}>
						취소
					</Button>
				</Col>
				<Col>
					<Button variant="outline-success" onClick={handleClickSubmit}>
						완료
					</Button>
				</Col>
			</Row>
		</div>
	);
};

export default RecsysInputForm;
