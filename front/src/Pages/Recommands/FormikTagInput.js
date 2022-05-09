import React from 'react';
import { Form, Field, ErrorMessage, FormikProps, useFormik, Formik } from 'formik';
import Button from '../../Components/Button';
import { validateYupSchema } from 'formik';
import styled from 'styled-components';
const MyInput = styled.input`
	width: 20rem;
	height: 2rem;
	background-color: #ccaacc;
	padding: 4px 10px;
	margin-right: 10px;
`;

const CustomInput = ({ field, form, ...props }) => {
	return <input {...field} {...props} />;
};

const FormikTagInput = () => {
	const handleSubmit = (values, actions) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			actions.setSubmitting(false);
		}, 1000);
	};
	return (
		<Formik
			initialValues={{ breakfast: '', lunch: '' }}
			onSubmit={(values, actions) => handleSubmit(values, actions)}
		>
			{FormikProps => (
				<Form>
					<Field type="text" name="breakfast">
						{({ field, form: { touched, errors }, meta }) => {
							return (
								<>
									<MyInput {...field} />
									{meta.touched && meta.error && (
										<div className="error">{meta.error}</div>
									)}
								</>
							);
						}}
					</Field>
					<Button type="submit">Submit</Button>
				</Form>
			)}
		</Formik>
	);
};
/*
const formik = useFormik({
		initialValues: {
			breakfast: '',
			lunch: '',
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
			console.log(formik.values);
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="breakfast">아침</label>
			<input id="breakfast" type="text" {...formik.getFieldProps('breakfast')} />
			{formik.touched.breakfast && formik.errors.breakfast ? (
				<div>{formik.errors.breakfast}</div>
			) : null}

			<br />
			<br />
			<label htmlFor="lunch">점심</label>
			<input id="lunch" type="text" {...formik.getFieldProps('lunch')} />
			{formik.touched.lunch && formik.errors.lunch ? <div>{formik.errors.lunch}</div> : null}

			<Button size="small" outline style={{ marginLeft: '1rem' }} type="submit">
				Submit
			</Button>
		</form>
	);
*/

// 	<div>
// 		<h1>My Form</h1>
// 		<Formik
// 			initialValues={{ email: '', color: 'red', firstName: '', lastName: '' }}
// 			onSubmit={(values, actions) => {
// 				setTimeout(() => {
// 					alert(JSON.stringify(values, null, 2));
// 					actions.setSubmitting(false);
// 				}, 1000);
// 			}}
// 		>
// 			{({ touched, errors }) => (
// 				<Form>
// 					<Field type="email" name="email" placeholder="Email" />
// 					<Field as="select" name="color">
// 						<option value="red">Red</option>
// 						<option value="green">Green</option>
// 						<option value="blue">Blue</option>
// 					</Field>

// 					<Field name="lastName">
// 						{({
// 							field, // { name, value, onChange, onBlur }
// 							form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
// 							meta,
// 						}) => (
// 							<div>
// 								<input type="text" placeholder="Email" {...field} />
// 								{meta.touched && meta.error && (
// 									<div className="error">{meta.error}</div>
// 								)}
// 							</div>
// 						)}
// 					</Field>
// 					<Field name="lastName" placeholder="Doe" component={MyInput} />
// 					<button type="submit">Submit</button>
// 				</Form>
// 			)}
// 		</Formik>
// 	</div>
// );

export default FormikTagInput;
