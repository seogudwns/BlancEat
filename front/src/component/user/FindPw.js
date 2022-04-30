import { Form, Col, Row } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';

import React, { useState } from 'react';
import { StyledSection, StyledText } from '../../Contents/styleContents';
import { StyledButton } from '../../Components/Styles/styleButton';
import { PageContainer } from '../../Pages/Styles/stylePages';
import * as Api from '../../Api';

const FindPw = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');

	const submitFindPw = evt => {
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

	return (
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
							<StyledText color="red" size="1rem" style={{ visibility: 'hidden' }}>
								이메일 형식이 올바르지 않습니다
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
							<Link to="/register">아직 회원이 아니십니까?</Link>
						</Col>
						<StyledButton type="submit" onClick={submitFindPw} disabled={!isEmailValid}>
							이메일로 인증 번호 받기
						</StyledButton>
					</div>
				</Form>
			</StyledSection>
		</PageContainer>
	);
};

export default FindPw;
