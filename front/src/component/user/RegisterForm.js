import { Form, Col, Row } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

import React, { useState } from 'react';
import { StyledSection, StyledText } from '../../Contents/styleContents';
import { StyledButton } from '../../Components/Styles/styleButton';
import { PageContainer } from '../../Pages/Styles/stylePages';
import LoginForm from './LoginForm';
import * as Api from '../../Api';

const RegisterForm = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [confirmPw, setConfirmPw] = useState('');
	const [name, setName] = useState('');
	const [show, setShow] = useState(false);

	const submitRegisterForm = evt => {
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
	const isPwSame = pw === confirmPw;
	const isNameValid = name.length >= 2;
	const isFormValid = isEmailValid && isPwValid && isPwSame && isNameValid;

	return (
		<>
			<PageContainer fluid>
				<StyledSection style={{ width: '80%', justifyContent: 'center', margin: '30px' }}>
					<Form style={{ width: '70%' }}>
						<Form.Label>Email</Form.Label>
						<Form.Group style={{ marginBottom: '10px' }}>
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
						</Form.Group>
						<Form.Group style={{ marginBottom: '10px' }}>
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
						</Form.Group>
						<Form.Group style={{ marginBottom: '10px' }}>
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="비밀번호를 한 번 더 입력하세요"
								autoComplete="off"
								value={confirmPw}
								onChange={evt => setConfirmPw(evt.target.value)}
							/>
							{!isPwSame ? (
								<StyledText color="red" size="1rem">
									비밀번호가 일치하지 않습니다.
								</StyledText>
							) : (
								<StyledText
									color="red"
									size="1rem"
									style={{ visibility: 'hidden' }}
								>
									비밀번호가 일치하지 않습니다.
								</StyledText>
							)}
						</Form.Group>
						<Form.Group style={{ marginBottom: '10px' }}>
							<Form.Label>User Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="회원님의 이름을 알려주세요."
								autoComplete="off"
								value={name}
								onChange={evt => setName(evt.target.value)}
							/>
							{!isNameValid ? (
								<StyledText color="red" size="1rem">
									이름은 두 글자 이상이어야 합니다.
								</StyledText>
							) : (
								<StyledText
									color="red"
									size="1rem"
									style={{ visibility: 'hidden' }}
								>
									이름은 두 글자 이상이어야 합니다.
								</StyledText>
							)}
						</Form.Group>
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								marginTop: '80px',
								alignItems: 'center',
							}}
						>
							<Col
								style={{
									display: 'flex',
									justifyContent: 'center',
									marginBottom: '20px',
								}}
							>
								<a
									href="/"
									onClick={evt => {
										evt.preventDefault();
										setShow(true);
									}}
									style={{ marginRight: '40px' }}
								>
									이미 회원이십니까?
								</a>
								<Link to="/findpw">비밀번호를 잊으셨나요?</Link>
							</Col>
							<StyledButton
								type="submit"
								onClick={submitRegisterForm}
								disabled={!isFormValid}
							>
								Sign Up
							</StyledButton>
						</div>
					</Form>
				</StyledSection>
			</PageContainer>

			{show && <LoginForm show={show} setShow={setShow} />}
		</>
	);
};

export default RegisterForm;
