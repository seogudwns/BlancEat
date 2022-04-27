import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from '../../Api';
import ModalPortal from '../../ModalPortal';
import styled from 'styled-components';

const StyledInput = styled.input`
	width: 300px;
	height: 20px;
	border: 1px solid #cecfcd;
`;

const StyledText = styled.div`
	text-align: ${props => (props.ta ? props.ta : 'none')};
	color: ${props => (props.color ? props.color : 'none')};
	font-size: ${props => (props.size ? props.size : 'none')};
`;

const StyledButton = styled.button`
	background: ${props => (props.background ? props.background : 'none')};
	border-radius: 5px;
	border: 1px solid #fcfbfa;
	color: #fcfbfa;
	font-size: 1rem;
	cursor: pointer;
`;

const LoginPage = ModalActive => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [modalOpen, setModalOpen] = useState(false);

	const openModal = () => {
		ModalActive ? setModalOpen(true) : null;
	};

	const closeModal = () => {
		setModalOpen(false);
	};

	const submitLoginForm = evt => {
		evt.preventDefault();
	};

	const createLoginModal = () => {
		return (
			<>
				<form onSubmit={submitLoginForm}>
					<StyledInput
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
					<StyledInput
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
					<StyledButton background="skyblue">Sign In</StyledButton>
				</form>
			</>
		);
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
			<ModalPortal
				open={openModal}
				close={closeModal}
				header="SIGN IN"
				main={createLoginModal}
				children
			></ModalPortal>
		</>
	);
};

export default LoginPage;
