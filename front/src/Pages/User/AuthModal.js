import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ModalComp from '../../Components/ModalComp';
import ModalPortal from '../../Components/ModalPortal';

const AuthModal = ({ show, setShow }) => {
	const [isLoginForm, setIsLoginForm] = useState(true);

	return (
		<ModalPortal>
			<ModalComp
				show={show}
				setShow={setShow}
				title="SIGN IN"
				main={
					isLoginForm ? (
						<LoginForm setShow={setShow} />
					) : (
						<RegisterForm setShow={setShow} />
					)
				}
				children
			>
				{isLoginForm ? (
					<a
						href="/"
						onClick={evt => {
							evt.preventDefault();
							setIsLoginForm(false);
						}}
					>
						아직 회원이 아니십니까?
					</a>
				) : (
					<a
						href="/"
						onClick={evt => {
							evt.preventDefault();
							setIsLoginForm(true);
						}}
					>
						이미 회원이십니까?
					</a>
				)}
			</ModalComp>
		</ModalPortal>
	);
};

export default AuthModal;
