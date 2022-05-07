import React, { useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
// import { FoodDataContext } from './ContentRecommand';

function states() {
	return [
		{ name: '감자' },
		{ name: '감자전' },
		{ name: '감자탕' },
		{ name: '감자깡' },
		{ name: '고구마' },
		{ name: '탕수육' },
		{ name: '눈꽃탕수육' },
		{ name: '김치' },
		{ name: '불고기 피자' },
		{ name: '피자 빵' },
		{ name: '콤비네이션 피자' },
	];
}

const autosuggestRenderInput = ({ addTag, ...props }) => {
	// const [clear, setClear] = useState(false);
	// useEffect(() => {
	// 	if (!suggestions.some(option => option === value) && clear) {
	// 		setValue('');
	// 	}
	// 	setClear(false);
	// }, [clear]);

	// const onSuggestionsClearRequested = () => {
	// 	setClear(true);
	// 	setSuggestions([]);
	// };
	// const { suggestions, getSuggestFoodList } = useContext(FoodDataContext);
	// const [value, setValue] = useState('');
	// const [suggestion, setSuggestion] = useState([]);
	// // onChange = (event, { newValue }) => {
	// 	this.setState({
	// 	  value: newValue
	// 	});
	//   };
	const state = {
		value: '',
		suggestions: [],
	};

	function getSuggestions(value) {
		console.log('auto suggest - getSuggestions', value);
		const inputValue = value.trim().toLowerCase();
		const inputLength = inputValue.length;

		// return inputLength === 0
		// 	? []
		// 	: languages.filter(lang => lang.name.toLowerCase().slice(0, inputLength) === inputValue);
		props.onSuggestionsFetchRequested(e);
	}

	const handleOnChange = (e, { newValue, method }) => {
		if (method === 'enter') {
			e.preventDefault();
		} else {
			props.onChange(e);
			// getSuggestions();
			// getSuggestFoodList(newValue);
			// props.onSuggestionsFetchRequested(e);
		}
	};

	const inputValue = (props.value && props.value.trim().toLowerCase()) || '';
	const inputLength = inputValue.length;

	let suggestions = states().filter(state => {
		return state.name.toLowerCase().slice(0, inputLength) === inputValue;
	});
	/*
	suggestions.filter(state => {
		return state.name.toLowerCase().slice(0, inputLength) === inputValue;
	});
*/
	return (
		<Autosuggest
			ref={props.ref}
			suggestions={suggestions}
			shouldRenderSuggestions={value => value && value.trim().length > 0}
			getSuggestionValue={suggestion => suggestion.name}
			renderSuggestion={suggestion => <span>{suggestion.name}</span>}
			inputProps={{ ...props, onChange: handleOnChange }}
			onSuggestionSelected={(e, { suggestion }) => {
				addTag(suggestion.name);
			}}
			onSuggestionsClearRequested={() => {}}
			onSuggestionsFetchRequested={() => {}}
		/>
	);
};

export default autosuggestRenderInput;
