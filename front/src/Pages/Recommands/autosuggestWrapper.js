import React, { useState } from 'react';

import autosuggestRenderInput2 from './autosuggestRenderInput2';

const autosuggestWrapper = () => {
	const [value, setValue] = useState('');
	const [suggestions, setSuggestions] = useState([]);

	return autosuggestRenderInput2({ suggestions });
};

export default autosuggestWrapper;
