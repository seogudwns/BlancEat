import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
// import { FoodDataContext } from './ContentRecommand';

function states() {
	return [
		{ abbr: 'AL', name: 'Alabama' },
		{ abbr: 'AK', name: 'Alaska' },
		{ abbr: 'AZ', name: 'Arizona' },
		{ abbr: 'AR', name: 'Arkansas' },
		{ abbr: 'CA', name: 'California' },
		{ abbr: 'CO', name: 'Colorado' },
		{ abbr: 'CT', name: 'Connecticut' },
		{ abbr: 'DE', name: 'Delaware' },
		{ abbr: 'FL', name: 'Florida' },
		{ abbr: 'GA', name: 'Georgia' },
		{ abbr: 'HI', name: 'Hawaii' },
		{ abbr: 'ID', name: 'Idaho' },
		{ abbr: 'IL', name: 'Illinois' },
		{ abbr: 'IN', name: 'Indiana' },
		{ abbr: 'IA', name: 'Iowa' },
		{ abbr: 'KS', name: 'Kansas' },
		{ abbr: 'KY', name: 'Kentucky' },
		{ abbr: 'LA', name: 'Louisiana' },
		{ abbr: 'ME', name: 'Maine' },
		{ abbr: 'MD', name: 'Maryland' },
		{ abbr: 'MA', name: 'Massachusetts' },
		{ abbr: 'MI', name: 'Michigan' },
		{ abbr: 'MN', name: 'Minnesota' },
		{ abbr: 'MS', name: 'Mississippi' },
		{ abbr: 'MO', name: 'Missouri' },
		{ abbr: 'MT', name: 'Montana' },
		{ abbr: 'NE', name: 'Nebraska' },
		{ abbr: 'NV', name: 'Nevada' },
		{ abbr: 'NH', name: 'New Hampshire' },
		{ abbr: 'NJ', name: 'New Jersey' },
		{ abbr: 'NM', name: 'New Mexico' },
		{ abbr: 'NY', name: 'New York' },
		{ abbr: 'NC', name: 'North Carolina' },
		{ abbr: 'ND', name: 'North Dakota' },
		{ abbr: 'OH', name: 'Ohio' },
		{ abbr: 'OK', name: 'Oklahoma' },
		{ abbr: 'OR', name: 'Oregon' },
		{ abbr: 'PA', name: 'Pennsylvania' },
		{ abbr: 'RI', name: 'Rhode Island' },
		{ abbr: 'SC', name: 'South Carolina' },
		{ abbr: 'SD', name: 'South Dakota' },
		{ abbr: 'TN', name: 'Tennessee' },
		{ abbr: 'TX', name: 'Texas' },
		{ abbr: 'UT', name: 'Utah' },
		{ abbr: 'VT', name: 'Vermont' },
		{ abbr: 'VA', name: 'Virginia' },
		{ abbr: 'WA', name: 'Washington' },
		{ abbr: 'WV', name: 'West Virginia' },
		{ abbr: 'WI', name: 'Wisconsin' },
		{ abbr: 'WY', name: 'Wyoming' },
	];
}

const autosuggestRenderInput = ({ addTag, ...props }) => {
	// const { suggestions, getSuggestFoodList } = useContext(FoodDataContext);
	// const [value, setValue] = useState('');
	// const [suggestion, setSuggestion] = useState([]);
	// // onChange = (event, { newValue }) => {
	// 	this.setState({
	// 	  value: newValue
	// 	});
	//   };
	function getSuggestions(value) {
		console.log('auto suggest - getSuggestions', value);
		// const inputValue = value.trim().toLowerCase();
		// const inputLength = inputValue.length;

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

	// let suggestions = [...suggestions];
	/*
	suggestions.filter(state => {
		return state.name.toLowerCase().slice(0, inputLength) === inputValue;
	});
*/
	return (
		<Autosuggest
			ref={props.ref}
			suggestions={[]}
			shouldRenderSuggestions={value => value && value.trim().length > 0}
			getSuggestionValue={suggestion => suggestion.name}
			renderSuggestion={suggestion => <span>{suggestion.name}</span>}
			inputProps={{ ...props, onChange: handleOnChange }}
			onSuggestionSelected={(e, { suggestion }) => {
				addTag(suggestion.name);
			}}
			onSuggestionsClearRequested={() => {}}
			onSuggestionsFetchRequested={() => {}}
			// theme={theme}
		/>
	);
};

export default autosuggestRenderInput;

/*
const theme = {
	container: {
		position: 'relative',
		zIndex: 2,
	},
	input: {
		width: 240,
		height: 30,
		padding: '10px 20px',
		fontFamily: 'Helvetica, sans-serif',
		fontWeight: 300,
		fontSize: 16,
		border: '1px solid #aaa',
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
	},
	inputFocused: {
		outline: 'none',
	},
	inputOpen: {
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0,
	},
	suggestionsContainer: {
		display: 'none',
	},
	suggestionsContainerOpen: {
		display: 'block',
		position: 'absolute',
		top: 51,
		width: 280,
		border: '1px solid #aaa',
		backgroundColor: '#fff',
		fontFamily: 'Helvetica, sans-serif',
		fontWeight: 300,
		fontSize: 16,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
		zIndex: 2,
	},
	suggestionsList: {
		margin: 0,
		padding: 0,
		listStyleType: 'none',
	},
	suggestion: {
		cursor: 'pointer',
		padding: '10px 20px',
	},
	suggestionHighlighted: {
		backgroundColor: '#ddd',
	},
};
*/
/*
function states() {
	return [
		{ abbr: 'AL', name: 'Alabama' },
		{ abbr: 'AK', name: 'Alaska' },
		{ abbr: 'AZ', name: 'Arizona' },
		{ abbr: 'AR', name: 'Arkansas' },
		{ abbr: 'CA', name: 'California' },
		{ abbr: 'CO', name: 'Colorado' },
		{ abbr: 'CT', name: 'Connecticut' },
		{ abbr: 'DE', name: 'Delaware' },
		{ abbr: 'FL', name: 'Florida' },
		{ abbr: 'GA', name: 'Georgia' },
		{ abbr: 'HI', name: 'Hawaii' },
		{ abbr: 'ID', name: 'Idaho' },
		{ abbr: 'IL', name: 'Illinois' },
		{ abbr: 'IN', name: 'Indiana' },
		{ abbr: 'IA', name: 'Iowa' },
		{ abbr: 'KS', name: 'Kansas' },
		{ abbr: 'KY', name: 'Kentucky' },
		{ abbr: 'LA', name: 'Louisiana' },
		{ abbr: 'ME', name: 'Maine' },
		{ abbr: 'MD', name: 'Maryland' },
		{ abbr: 'MA', name: 'Massachusetts' },
		{ abbr: 'MI', name: 'Michigan' },
		{ abbr: 'MN', name: 'Minnesota' },
		{ abbr: 'MS', name: 'Mississippi' },
		{ abbr: 'MO', name: 'Missouri' },
		{ abbr: 'MT', name: 'Montana' },
		{ abbr: 'NE', name: 'Nebraska' },
		{ abbr: 'NV', name: 'Nevada' },
		{ abbr: 'NH', name: 'New Hampshire' },
		{ abbr: 'NJ', name: 'New Jersey' },
		{ abbr: 'NM', name: 'New Mexico' },
		{ abbr: 'NY', name: 'New York' },
		{ abbr: 'NC', name: 'North Carolina' },
		{ abbr: 'ND', name: 'North Dakota' },
		{ abbr: 'OH', name: 'Ohio' },
		{ abbr: 'OK', name: 'Oklahoma' },
		{ abbr: 'OR', name: 'Oregon' },
		{ abbr: 'PA', name: 'Pennsylvania' },
		{ abbr: 'RI', name: 'Rhode Island' },
		{ abbr: 'SC', name: 'South Carolina' },
		{ abbr: 'SD', name: 'South Dakota' },
		{ abbr: 'TN', name: 'Tennessee' },
		{ abbr: 'TX', name: 'Texas' },
		{ abbr: 'UT', name: 'Utah' },
		{ abbr: 'VT', name: 'Vermont' },
		{ abbr: 'VA', name: 'Virginia' },
		{ abbr: 'WA', name: 'Washington' },
		{ abbr: 'WV', name: 'West Virginia' },
		{ abbr: 'WI', name: 'Wisconsin' },
		{ abbr: 'WY', name: 'Wyoming' },
	];
}
*/
