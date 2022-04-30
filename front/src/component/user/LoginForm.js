import { Form, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import React, { useState, useEffect } from 'react';
import { StyledText } from '../../Contents/styleContents';
import * as Api from '../../Api';
import ModalComp from '../../ModalComp';
import ModalPortal from '../../ModalPortal';

const StyledButton = styled(Button)`
	background: ${props => props.background};
	margin: ${props => props.margin};
`;

const LoginForm = ({ show, setShow }) => {
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');

	const submitLoginForm = evt => {
		evt.preventDefault();
	};

	const validateEmail = email => {
		return email
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			);
	};

	const isEmailValid = validateEmail(email);
	const isPwValid = pw.length >= 4;
	const isFormValid = isEmailValid && isPwValid;

	return (
		<>
			<ModalPortal>
				<ModalComp
					show={show}
					setShow={setShow}
					title="SIGN IN"
					main={
						<Form onSubmit={submitLoginForm}>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								placeholder="이메일을 입력하세요"
								autoComplete="off"
								value={email}
								onChange={evt => setEmail(evt.target.value)}
							/>
							{!isEmailValid ? (
								<StyledText color="red" size="1rem">
									이메일 형식이 올바르지 않습니다
								</StyledText>
							) : (
								<StyledText
									color="red"
									size="1rem"
									style={{ visibility: 'hidden' }}
								>
									이메일 형식이 올바르지 않습니다
								</StyledText>
							)}
							<br />
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="비밀번호를 입력하세요"
								autoComplete="off"
								value={pw}
								onChange={evt => setPw(evt.target.value)}
							/>
							{!isPwValid ? (
								<StyledText color="red" size="1rem">
									비밀번호는 4글자 이상이어야 합니다.
								</StyledText>
							) : (
								<StyledText
									color="red"
									size="1rem"
									style={{ visibility: 'hidden' }}
								>
									비밀번호는 4글자 이상이어야 합니다.
								</StyledText>
							)}
							<StyledButton
								type="submit"
								disabled={!isFormValid}
								margin="0 0 0 386px"
								variant="primary"
							>
								Sign In
							</StyledButton>
						</Form>
					}
					children
				>
					<Col>
						<Link
							to="/register"
							onClick={() => setShow(false)}
							style={{ marginRight: '20px' }}
						>
							아직 회원이 아니십니까?
						</Link>
						<Link to="/findpw" onClick={() => setShow(false)}>
							비밀번호를 잊으셨나요?
						</Link>
					</Col>
				</ModalComp>
			</ModalPortal>
		</>
	);
};

export default LoginForm;
