import { Form } from 'react-bootstrap';
import { useSetRecoilState } from 'recoil';

import React, { useState } from 'react';
import { loginState, userIdState } from './UserAtom';
import { StyledText } from '../../Contents/styleContents';
import { StyledButton } from '../../Components/Styles/styleButton';
import * as Api from '../../Commons/Api';

const LoginForm = ({ setShow }) => {
	const setIsLogin = useSetRecoilState(loginState);
	const setUserId = useSetRecoilState(userIdState);

	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');

	const submitLoginForm = async evt => {
		evt.preventDefault();
		try {
			const res = await Api.post('user/login', {
				email: email,
				password: pw,
			});
			setShow(false);
			alert('로그인 완료');
			const userIdFromServer = res.data.id;
			const jwtToken = res.data.token;
			sessionStorage.setItem('userToken', jwtToken);
			sessionStorage.setItem('userId', userIdFromServer);
			setIsLogin(true);
		} catch (err) {
			console.error(err);
		}
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
				<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
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
				<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
					비밀번호는 4글자 이상이어야 합니다.
				</StyledText>
			)}
			<StyledButton
				type="submit"
				disabled={!isFormValid}
				margin="0 0 0 386px"
				variant="primary"
				style={{ marginTop: '10px' }}
			>
				Sign In
			</StyledButton>
		</Form>
	);
};

export default LoginForm;
