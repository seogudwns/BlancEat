import React, { useContext, useState } from 'react';

import { RecommandContext } from './RecommandContext';
import { FoodDataContext } from './ContentRecommand';
import { InputGroup, Col, Row } from 'react-bootstrap';
import { FormContainer } from '../../Contents/Styles/styleContents';
import Button from '../../Components/Button';
import TagInput from './TagInput';

const RecsysInputForm = () => {
	const [breakfast, setBreakfast] = useState([]);
	const [lunch, setLunch] = useState([]);
	const [dinner, setDinner] = useState([]);
	const [snack, setSnack] = useState([]);
	const { dispatch } = useContext(RecommandContext);
	const { setFoodData } = useContext(FoodDataContext);

	const handleClickSubmit = () => {
		const FOODINFORM = [...breakfast, ...lunch, ...dinner, ...snack];
		console.log(breakfast);
		console.log(lunch);
		console.log(dinner);
		console.log(snack);
		console.log('RecsysInputForm', FOODINFORM);
		setFoodData(FOODINFORM);
		dispatch({ type: 'OUTPUT' });
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
	return (
		<FormContainer>
			<InputGroup className="mb-3">
				<TagInput dataHandler={dataHandlerBreakfast} />
			</InputGroup>
			<br />
			<InputGroup className="mb-3">
				<TagInput dataHandler={dataHandlerLunch} />
			</InputGroup>
			<br />
			<InputGroup className="mb-3">
				<TagInput dataHandler={dataHandlerDinner} />
			</InputGroup>
			<br />
			<InputGroup className="mb-3">
				<TagInput dataHandler={dataHandlerSnack} />
			</InputGroup>
			<br />
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
		</FormContainer>
	);
};

export default RecsysInputForm;
