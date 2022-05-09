import React, { useCallback, useContext, useState } from 'react';
import { debounce } from 'lodash';
import ReactTagStyle from './ReactTagStyle';
import { WithContext as ReactTags } from 'react-tag-input';
import { FoodDataContext } from './ContentRecommand';
import { TagInputStyle } from './TagInputStyle';

const KeyCodes = {
	comma: 188,
	enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const TagInput = ({ dataHandler, alertHandler }) => {
	const { suggestions, getSuggestFoodList } = useContext(FoodDataContext);
	const [tags, setTags] = useState([]);

	const INPUT_LIMIT = 4;
	const handleDelete = i => {
		setTags(tags.filter((tag, index) => index !== i));
	};

	const handleAddition = tag => {
		if (tags.length >= INPUT_LIMIT) {
			alertHandler('FULLFILLED');
			return;
		}
		if (suggestions.includes(tag)) {
			const newList = [...tags, tag];
			setTags(newList);
			dataHandler(newList);
		}
	};

	/*throttle */
	const debouncedFilter = useCallback(debounce(query => getSuggestFoodList(query), 200));

	const handleInputChange = tag => {
		if (!tag) return;
		debouncedFilter(tag);
	};

	const handleTagClick = index => {
		console.log('The tag at index ' + index + ' was clicked');
	};
	const onClearAll = () => {
		setTags([]);
	};
	const onTagUpdate = (i, newTag) => {
		const updatedTags = tags.slice();
		updatedTags.splice(i, 1, newTag);
		setTags(updatedTags);
	};

	return (
		<TagInputStyle>
			<ReactTags
				handleDelete={handleDelete}
				handleAddition={handleAddition}
				handleInputChange={handleInputChange}
				delimiters={delimiters}
				handleTagClick={handleTagClick}
				onTagUpdate={onTagUpdate}
				placeholder="Search..."
				minQueryLength={2}
				maxLength={5}
				autofocus={false}
				allowDeleteFromEmptyInput={true}
				autocomplete={true}
				readOnly={false}
				allowUnique={true}
				allowDragDrop={false}
				inline={true}
				inputFieldPosition="inline"
				allowAdditionFromPaste={false}
				editable={true}
				clearAll={false}
				tags={tags}
				suggestions={suggestions}
			/>
		</TagInputStyle>
	);
};
export default TagInput;
