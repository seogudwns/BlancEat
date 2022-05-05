import React, { useContext, useState } from 'react';

import { FOODS } from './foodlist';
import ReactTagStyle from './ReactTagStyle';
import { WithContext as ReactTags } from 'react-tag-input';

import { FoodDataContext } from './ContentRecommand';

const suggestions = FOODS.map(food => {
	return {
		id: food,
		text: food,
	};
});

const KeyCodes = {
	comma: 188,
	enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const TagInput = ({ dataHandler }) => {
	const { getSuggestFoodList } = useContext(FoodDataContext);
	const [tags, setTags] = useState([]);

	const handleDelete = i => {
		setTags(tags.filter((tag, index) => index !== i));
	};

	const handleAddition = tag => {
		// getSuggestFoodList(tag);
		if (suggestions.includes(tag)) {
			const newList = [...tags, tag];
			setTags(newList);
			dataHandler(newList);
		}
	};

	const handleDrag = (tag, currPos, newPos) => {
		const newTags = tags.slice();

		newTags.splice(currPos, 1);
		newTags.splice(newPos, 0, tag);

		// re-render
		setTags(newTags);
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
		<ReactTagStyle>
			<ReactTags
				handleDelete={handleDelete}
				handleAddition={handleAddition}
				handleDrag={handleDrag}
				delimiters={delimiters}
				handleTagClick={handleTagClick}
				onClearAll={onClearAll}
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
				allowAdditionFromPaste={true}
				editable={true}
				clearAll={true}
				tags={tags}
				suggestions={suggestions}
			/>
		</ReactTagStyle>
	);
};
export default TagInput;
/*
		<ReactTagStyle>
			<ReactTags
				handleDelete={handleDelete}
				handleAddition={handleAddition}
				handleDrag={handleDrag}
				delimiters={delimiters}
				handleTagClick={handleTagClick}
				onClearAll={onClearAll}
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
				allowAdditionFromPaste={true}
				editable={true}
				clearAll={true}
				tags={tags}
				suggestions={suggestions}
			/>
		</ReactTagStyle>
*/
// render(<App />, document.getElementById('root'));

/*
			tags={tags}
				suggestions={suggestions}
				delimiters={delimiters}
				handleDelete={handleDelete}
				handleAddition={handleAddition}
				handleDrag={handleDrag}
				handleTagClick={handleTagClick}
				onClearAll={onClearAll}
				inputFieldPosition="inline"
				autocomplete
				allowDeleteFromEmptyInput
				clearAll={true}
*/
/*

        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        delimiters={delimiters}
        handleTagClick={handleTagClick}
        onClearAll={onClearAll}
        onTagUpdate={onTagUpdate}
        suggestions={[{"id":"1","text":"Albania"},{"id":"2","text":"Australia"},{"id":"3","text":"France"},{"id":"4","text":"India"},{"id":"5","text":"Oman"},{"id":"6","text":"Russia"},{"id":"7","text":"Serbia"},{"id":"8","text":"Swaziland"},{"id":"9","text":"United States of America"},{"id":"10","text":"Vietnam"}]}
        placeholder="Search..."
        minQueryLength={2}
        maxLength={5}
        autofocus={false}
        allowDeleteFromEmptyInput={true}
        autocomplete={true}
        readOnly={false}
        allowUnique={true}
        allowDragDrop={true}
        inline={true}
        allowAdditionFromPaste={true}
        editable={true}
        clearAll={true}
        tags={tags}
*/
