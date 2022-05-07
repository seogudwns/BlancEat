import React, { useState } from 'react';
import { ReactDOM } from 'react';
import TagsInput from 'react-tagsinput-2';
import Button from '../../Components/Button';

import { Formik, Form, FieldArray, ErrorMessage } from 'formik';
// import 'react-tagsinput/react-tagsinput.css';
import { FormikTagsInputStyle } from './FormikTagsInputStyle';
const ReactFormikTagsInput = () => {
	return (
		<Formik
			initialValues={{ tags1: [], tags2: [], tags3: [], tags4: [] }}
			onSubmit={async values => {
				await sleep(500);
				alert(JSON.stringify(values, null, 2));
			}}
		>
			<FormikTagsInputStyle>
				{({ isSubmitting }) => (
					<Form
						onSubmit={handleSubmit}
						noValidate
						name="simpleForm"
						className="tagsinput_container"
					>
						<TagsInput
							name="tags1"
							value={values.tags1}
							onChange={tags => {
								console.log(tags);
								setFieldValue('tags1', tags);
							}}
						/>
						<TagsInput
							name="tags2"
							value={values.tags2}
							onChange={tags => {
								console.log(tags);
								setFieldValue('tags2', tags);
							}}
						/>
						<TagsInput
							name="tags3"
							value={values.tags3}
							onChange={tags => {
								console.log(tags);
								setFieldValue('tags3', tags);
							}}
						/>
						<TagsInput
							name="tags4"
							value={values.tags4}
							onChange={tags => {
								console.log(tags);
								setFieldValue('tags4', tags);
							}}
						/>
						<Button type="submit" disabled={isSubmitting}>
							확인
						</Button>
					</Form>
				)}
			</FormikTagsInputStyle>
		</Formik>
	);
};

export default ReactFormikTagsInput;
