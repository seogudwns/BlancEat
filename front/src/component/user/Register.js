import { Form, Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import React, { useState } from 'react';
import * as Api from '../../Api';

const Register = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [pw, setPw] = useState('');
	const [confirmPw, setConfirmPw] = useState('');

	return <></>;
};

export default Register;
