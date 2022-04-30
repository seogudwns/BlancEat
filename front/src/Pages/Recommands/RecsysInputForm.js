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
			<InputGroup className="mb-3">
				<TagInput />
			</InputGroup>
			<br />
			<InputGroup className="mb-3">
				<TagInput />
			</InputGroup>
			<br />
			<InputGroup className="mb-3">
				<TagInput />
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
