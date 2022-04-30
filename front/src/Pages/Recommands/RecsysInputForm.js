import React, { useContext } from 'react';

import { RecommandContext } from './RecommandContext';
import { InputGroup, FormControl, Form, Col, Row } from 'react-bootstrap';
import { FormContainer } from '../../Contents/Styles/styleContents';
import Button from '../../Components/Button';
import TagInput from './TagInput';

const RecsysInputForm = () => {
	const { dispatch } = useContext(RecommandContext);

	const handleClickSubmit = () => {
		dispatch({ type: 'OUTPUT' });
	};
	const handleClickCancel = () => {
		dispatch({ type: 'RESET' });
	};
	return (
		<FormContainer>
			<TagInput />

			<InputGroup className="mb-3">
				<InputGroup.Text id="inputGroup-sizing-default">아침</InputGroup.Text>
				<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
			</InputGroup>
			<br />
			<InputGroup className="mb-3">
				<InputGroup.Text id="inputGroup-sizing-default">점심</InputGroup.Text>
				<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
			</InputGroup>
			<br />
			<InputGroup className="mb-3">
				<InputGroup.Text id="inputGroup-sizing-default">저녁</InputGroup.Text>
				<FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default" />
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
