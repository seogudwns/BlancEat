import React, { useState, useRef, useCallback } from 'react';

import { PageContainer } from '../Styles/stylePages';
import FormikTagInput from './FormikTagInput';
import ReactFormikTagsInput from './ReactFormikTagsInput';
import styled from 'styled-components';
import autosuggestRenderInput from './autosuggestRenderInput';
import TagsInput from 'react-tagsinput-2';
import { RecsysInputFormStyle, FormikTagsInputStyle } from './FormikTagsInputStyle';
import autosuggestRenderInput2, { test } from './autosuggestRenderInput2';
import CustomTags from './CustomTags';

const Container = styled.div`
	height: 500px;
	justify-content: center;
	align-items: center;
	padding-top: 100px;
`;

const Testpage = () => {
	const [tags, setTags] = useState([]);
	const [suggestions, setSuggestions] = useState([]);
	const reactTags = useRef();
	const handleChange = newtags => {
		setTags(newtags);
	};

	const onDelete = useCallback(
		tagIndex => {
			setTags(tags.filter((_, i) => i !== tagIndex));
		},
		[tags],
	);

	const onAddition = useCallback(
		newTag => {
			setTags([...tags, newTag]);
		},
		[tags],
	);

	return (
		<PageContainer fluid>
			<CustomTags
			// ref={reactTags}
			// tags={tags}
			// suggestions={suggestions}
			// onDelete={onDelete}
			// onAddition={onAddition}
			/>
			{/* <FormikTagsInputStyle>
				<TagsInput
					renderInput={autosuggestRenderInput2}
					value={tags}
					onChange={tags => {
						setTags(tags);
						console.log('onchange autosuggest', tags);
					}}
					suggestions={suggestions}
					onSuggestionsFetchRequested={value => {
						console.log('autosuggestRenderInput2', value);
					}}
				/> */}

			<br />
			{/* <TagsInput
					renderInput={test}
					value={tags}
					onChange={tags => {
						setTags(tags);
						console.log('onchange autosuggest', tags);
					}}
					suggestions={suggestions}
					onSuggestionsFetchRequested={value => {
						console.log('autosuggestRenderInput2', value);
					}}
				/> */}
			<br />
			{/* </FormikTagsInputStyle> */}
		</PageContainer>
	);
};

export default Testpage;
