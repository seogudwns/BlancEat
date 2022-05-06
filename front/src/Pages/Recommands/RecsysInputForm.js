import React, { useContext, useState, useRef, useEffect } from 'react';

import Autosuggest from 'react-autosuggest';
import { Formik, Form, Field, useFormik } from 'formik';
import { RecommandContext } from './RecommandContext';
import { FoodDataContext } from './ContentRecommand';
import { InputGroup, FormControl, Radio, Col, Row, Alert } from 'react-bootstrap';

import { TitleWrapper } from '../../Components/Styles/styleContentLabel';
import { ValidateArray } from '../../Commons/consts';
import Button from '../../Components/Button';
import TagInput from './TagInput';
import ReactFormikTagsInput from './ReactFormikTagsInput';

import { FormikTagsInputStyle, RecsysInputFormStyle } from './FormikTagsInputStyle';
import TagsInput from 'react-tagsinput-2';

import SuggestTagInput from './autosuggestRenderInput';

const RecsysInputForm = () => {
	// const [breakfast, set]
	const [showAlert, setShowAlert] = useState(false);
	const { dispatch } = useContext(RecommandContext);
	const { postData } = useContext(FoodDataContext);

	const onKeyDown = keyEvent => {
		if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
			keyEvent.preventDefault();
		}
	};

	const handleClickCancel = () => {
		dispatch({ type: 'RESET' });
	};

	const initialValues = {
		age: '',
		sex: '',
		weight: '',
		breakfast: [],
		lunch: [],
		dinner: [],
		snack: [],
	};

	return (
		<Formik
			enableReinitialize
			initialValues={initialValues}
			onSubmit={async (values, { setSubmitting }) => {
				setSubmitting(true);
				//need loading process
				const dataSet = {
					age: values.age,
					sex: values.sex,
					weight: values.weight,
					breakfast: values.breakfast.map(el => el.text),
					lunch: values.lunch.map(el => el.text),
					dinner: values.dinner.map(el => el.text),
					snack: values.snack.map(el => el.text),
				};
				//const foodList = dataSet.map(el => el.text);
				console.log('RECSYS INPUT FORM CHECK LIST : ', dataSet);

				if (await postData(dataSet)) {
					//성공시 다음 단계.
					dispatch({ type: 'OUTPUT' });
				} else {
					//실패시 에러 처리단계... try catch?
				}
				setSubmitting(false);
			}}
		>
			{({
				values,
				errors,
				touched,
				status,
				dirty,
				handleChange,
				handleBlur,
				handleSubmit,
				isSubmitting,
				setSubmitting,
				isValid,
				handleReset,
				setTouched,
				setFieldValue,
				getFieldProps,
				onKeyDown,
			}) => (
				<RecsysInputFormStyle>
					<Form noValidate onSubmit={handleSubmit}>
						<div className="infoContainer">
							<label className="">기본 정보</label>

							<div role="group" aria-labelledby="my-radio-group">
								<label>
									<Field
										type="radio"
										id="sex"
										name="sex"
										value="M"
										checked={values.sex === 'M'}
										onChange={getFieldProps('sex').onChange}
									/>
									남성
								</label>
								<label>
									<Field
										type="radio"
										id="sex"
										name="sex"
										value="F"
										checked={values.sex === 'F'}
										onChange={getFieldProps('sex').onChange}
									/>
									여성
								</label>
							</div>
							<Field
								type="text"
								id="age"
								name="age"
								placeholder="나이"
								{...getFieldProps('age')}
							/>
							<Field
								id="text"
								name="weight"
								placeholder="몸무게"
								{...getFieldProps('weight')}
							/>
						</div>

						<FormikTagsInputStyle>
							<div className="tagsinput_container">
								<label
									htmlFor="breakfast"
									id="breakfast"
									className="tagsinput_label"
								>
									아침
								</label>
								<TagsInput
									name="breakfast"
									value={values.breakfast}
									onChange={tags => {
										console.log(tags);
										setFieldValue('breakfast', tags);
									}}
								/>
								{/* <Autosuggest
									inputProps={{
										placeholder: '음식 이름을 검색해보세요.',
										autoComplete: 'abcd',
										name: 'breakfast',
										id: 'breakfast',
									}}
								/> */}
							</div>
							<div className="tagsinput_container">
								<label id="lunch" className="tagsinput_label">
									점심
								</label>

								<TagsInput
									name="lunch"
									value={values.lunch}
									onChange={tags => {
										setFieldValue('lunch', tags);
									}}
								/>
							</div>
							<div className="tagsinput_container">
								<label id="dinner" className="tagsinput_label">
									저녁
								</label>
								<TagsInput
									name="dinner"
									value={values.dinner}
									onChange={tags => {
										setFieldValue('dinner', tags);
									}}
								/>
							</div>
							<div className="tagsinput_container">
								<label id="snack" className="tagsinput_label">
									간식
								</label>
								<TagsInput
									name="snack"
									value={values.snack}
									onChange={tags => {
										setFieldValue('snack', tags);
									}}
								/>
							</div>
						</FormikTagsInputStyle>

						<div className="footer">
							{/* <SuggestTagInput /> */}
							<Button
								type="button"
								onClick={() => {
									handleClickCancel();
								}}
								disabled={isSubmitting}
							>
								취소
							</Button>
							<Button type="submit" disabled={isSubmitting}>
								완료
							</Button>
						</div>
					</Form>
				</RecsysInputFormStyle>
			)}
		</Formik>
	);
};

export default RecsysInputForm;
