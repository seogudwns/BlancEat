import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Api from '../../Api';

const LoginPage = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');

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

	return <></>;
};

export default LoginPage;
