import { Form } from 'react-bootstrap';

import React, { useState } from 'react';
import { StyledText } from '../../Contents/styleContents';
import { StyledButton } from '../../Components/Styles/styleButton';
import * as Api from '../../Commons/Api';

const RegisterForm = ({ setShow }) => {
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [confirmPw, setConfirmPw] = useState('');
	const [nickname, setNickname] = useState('');
	const [weight, setWeight] = useState(0);
	const [age, setAge] = useState(0);
	const [sex, setSex] = useState('');

	const submitRegisterForm = async evt => {
		evt.preventDefault();
		try {
			await Api.post('user/register', {
				email: email,
				password: pw,
				checkPassword: confirmPw,
				nickName: nickname,
				age: Number(age),
				weight: Number(weight),
				sex: sex,
			});
			setShow(false);
			alert('회원 가입 완료');
		} catch (err) {
			console.log(err.message);
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
	const isPwSame = pw === confirmPw;
	const isNicknameValid = nickname.length >= 2;
	const isWeightValid = weight > 0;
	const isAgeValid = age > 0;
	const isSexValid = sex.length > 0;
	const isFormValid =
		isEmailValid &&
		isPwValid &&
		isPwSame &&
		isNicknameValid &&
		isWeightValid &&
		isAgeValid &&
		isSexValid;

	return (
		<Form onSubmit={submitRegisterForm}>
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
					<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
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
					<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
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
					<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
						비밀번호가 일치하지 않습니다.
					</StyledText>
				)}
			</Form.Group>
			<Form.Group style={{ marginBottom: '10px' }}>
				<Form.Label>User Name</Form.Label>
				<Form.Control
					type="text"
					placeholder="사용하실 닉네임을 알려주세요."
					autoComplete="off"
					value={nickname}
					onChange={evt => setNickname(evt.target.value)}
				/>
				{!isNicknameValid ? (
					<StyledText color="red" size="1rem">
						닉네임은 두 글자 이상이어야 합니다.
					</StyledText>
				) : (
					<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
						닉네임은 두 글자 이상이어야 합니다.
					</StyledText>
				)}
			</Form.Group>
			<Form.Group style={{ marginBottom: '10px' }}>
				<Form.Label>Weight</Form.Label>
				<Form.Control
					type="number"
					placeholder="현재 체중을 알려주세요."
					autoComplete="off"
					value={weight}
					onChange={evt => setWeight(evt.target.value)}
				/>
				{!isWeightValid ? (
					<StyledText color="red" size="1rem">
						현재 체중을 알려주세요.
					</StyledText>
				) : (
					<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
						현재 체중을 알려주세요.
					</StyledText>
				)}
			</Form.Group>
			<Form.Group style={{ marginBottom: '10px' }}>
				<Form.Label>Age</Form.Label>
				<Form.Control
					type="number"
					placeholder="현재 나이를 알려주세요."
					autoComplete="off"
					value={age}
					onChange={evt => setAge(evt.target.value)}
				/>
				{!isAgeValid ? (
					<StyledText color="red" size="1rem">
						현재 나이를 설정해주세요.
					</StyledText>
				) : (
					<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
						현재 나이를 설정해주세요.
					</StyledText>
				)}
			</Form.Group>
			<Form.Group style={{ marginBottom: '10px' }}>
				<Form.Label>Sex</Form.Label>
				<div
					onChange={evt => {
						setSex(evt.target.value);
					}}
				>
					<Form.Check inline label="남성" value="M" type="radio" name="sex" />
					<Form.Check inline label="여성" value="F" type="radio" name="sex" />
				</div>

				{!isSexValid ? (
					<StyledText color="red" size="1rem">
						성별을 선택해주세요.
					</StyledText>
				) : (
					<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
						성별을 선택해주세요.
					</StyledText>
				)}
			</Form.Group>
			<StyledButton
				type="submit"
				disabled={!isFormValid}
				margin="0 0 0 386px"
				variant="primary"
			>
				Sign Up
			</StyledButton>
		</Form>
	);
};

export default RegisterForm;
