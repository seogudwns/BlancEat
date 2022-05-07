import React, { useCallback, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTags from 'react-tag-autocomplete';

const CustomTags = () => {
	const [tags, setTags] = useState([]);

	const [suggestions, setSuggestions] = useState([
		{ id: 1, name: 'Apples' },
		{ id: 2, name: 'Pears' },
		{ id: 3, name: 'Bananas' },
		{ id: 4, name: 'Mangos' },
		{ id: 5, name: 'Lemons' },
		{ id: 6, name: 'Apricots' },
	]);

	const SuggestionComponent = ({ item, query }) => {
		return (
			<span id={item.id} className={item.name === query ? 'match' : 'no-match'}>
				{item.name}
			</span>
		);
	};

	const reactTags = useRef();

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

	const onValidate = useCallback(newTag => {
		return /^[a-z]{3,12}$/i.test(newTag.name);
	});

	return (
		<>
			<p>Enter new tags meeting the requirements below:</p>
			<ReactTags
				allowNew
				newTagText="Create new tag:"
				ref={reactTags}
				tags={tags}
				suggestions={suggestions}
				onDelete={onDelete}
				onAddition={onAddition}
				// onValidate={onValidate}
				SuggestionComponent={SuggestionComponent}
			/>
			<p style={{ margin: '0.25rem 0', color: 'gray' }}>
				<small>
					<em>Tags must be 3–12 characters in length and only contain the letters A-Z</em>
				</small>
			</p>
			<p>
				<b>Output:</b>
			</p>
			<pre>
				<code>{JSON.stringify(tags, null, 2)}</code>
			</pre>
		</>
	);
};

export default CustomTags;
