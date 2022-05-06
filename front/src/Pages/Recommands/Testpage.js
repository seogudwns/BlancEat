import React, { useState } from 'react';

import { PageContainer } from '../Styles/stylePages';
import FormikTagInput from './FormikTagInput';
import ReactFormikTagsInput from './ReactFormikTagsInput';
import styled from 'styled-components';
import autosuggestRenderInput from './autosuggestRenderInput';
import TagsInput from 'react-tagsinput-2';
import { RecsysInputFormStyle, FormikTagsInputStyle } from './FormikTagsInputStyle';

const Container = styled.div`
	height: 500px;
	justify-content: center;
	align-items: center;
	padding-top: 100px;
`;

const Testpage = () => {
	const [tags, setTags] = useState([]);
	const handleChange = newtags => {
		setTags(newtags);
	};
	return (
		<PageContainer fluid>
			<FormikTagsInputStyle>
				<TagsInput
					key={1}
					renderInput={autosuggestRenderInput}
					value={tags}
					onChange={tags => setTags(tags)}
				/>

				{/* <FormikTagInput /> */}
				<br />
				<br />
				{/* <ReactFormikTagsInput /> */}
			</FormikTagsInputStyle>
		</PageContainer>
	);
};

export default Testpage;
