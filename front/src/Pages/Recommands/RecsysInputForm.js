import React, { useContext, useState } from 'react';

import { Formik, Form, Field, useFormik } from 'formik';
import { RecommandContext } from './RecommandContext';
import { FoodDataContext } from './ContentRecommand';
import { InputGroup, FormControl, Radio, Col, Row, Alert } from 'react-bootstrap';

import { TitleWrapper } from '../../Components/Styles/styleContentLabel';

import Button from '../../Components/Button';
import TagInput from './TagInput';

const RecsysInputForm = () => {
	const [age, setAge] = useState([]);
	const [sex, setSex] = useState([]);
	const [weight, setWeight] = useState([]);
	const [breakfast, setBreakfast] = useState([]);
	const [lunch, setLunch] = useState([]);
	const [dinner, setDinner] = useState([]);
	const [snack, setSnack] = useState([]);
	const [showAlert, setShowAlert] = useState(false);
	const { dispatch } = useContext(RecommandContext);
	const { postData } = useContext(FoodDataContext);

	// const { handleSubmit, getFieldProps, touched, errors } = useFormik;

	const formik = useFormik({
		initialValues: { age: '', sex: '', weight: '' },
	});

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
			setShowAlert(true);
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
		<div>
			<Formik
				initialValues={{ age: '', sex: '', weight: '' }}
				onSubmit={(values, actions) => handleSubmit(values, actions)}
			>
				{FormikProps => (
					<Form>
						<Field
							type="text"
							id="age"
							placeholder="나이"
							{...formik.getFieldProps('age')}
						/>
						<div role="group" aria-labelledby="my-radio-group">
							<label>
								<Field
									type="radio"
									id="sex"
									name="sex"
									value="M"
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
							{...formik.getFieldProps('weight')}
						/>
					</Form>
				)}
			</Formik>
			<TagInput dataHandler={dataHandlerBreakfast} />
			<br />
			<TagInput dataHandler={dataHandlerLunch} />
			<br />
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
