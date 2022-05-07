import React, { useContext, useState, useEffect } from 'react';
import Autosuggest from 'react-autosuggest';
import { FoodDataContext } from './ContentRecommand';
import * as Api from '../../Commons/Api';
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

const autosuggestRenderInput2 = ({ addTag, ...props }) => {
	const [suggestions, setSuggestions] = useState([]);
	const handleOnChange = (e, { newValue, method }) => {
		if (method === 'enter') {
			e.preventDefault();
		} else {
			props.onChange(e);
			onSuggestionsFetchRequested(newValue);
		}
	};

	const inputValue = (props.value && props.value.trim().toLowerCase()) || '';
	const inputLength = inputValue.length;

	// let suggestions = states().filter(state => {
	// 	return state.name.toLowerCase().slice(0, inputLength) === inputValue;
	// });
	const onSuggestionsFetchRequested = async value => {
		console.log('onSuggestionsFetchRequested', value);
		if (!value) {
			setSuggestions([]);
			return;
		}
		try {
			console.log('in try', value);
			const result = await Api.getSuggest('nutrition_search', value);
			console.log('수신결과 : ', result);
			const list = result.map(el => {
				return { id: el._id, name: el.foodName };
			});
			setSuggestions(list);

			// console.log('수신결과 : ', result);
			// renderSuggestion(suggestions);
		} catch (e) {
			setSuggestions([]);
		}
	};
	const renderSuggestion = suggestion => <div>{suggestion.text}</div>;
	return (
		<Autosuggest
			ref={props.ref}
			suggestions={suggestions}
			shouldRenderSuggestions={value => value && value.trim().length > 0}
			getSuggestionValue={suggestion => suggestion.name}
			renderSuggestion={suggestion => <div>{suggestion.text}</div>}
			inputProps={{ ...props, onChange: handleOnChange }}
			onSuggestionSelected={(e, { suggestion }) => {
				addTag(suggestion.name);
			}}
			onSuggestionsClearRequested={() => {}}
			onSuggestionsFetchRequested={() => {}}
		/>
	);
};

export default autosuggestRenderInput2;
