import React, { useReducer, createContext } from 'react';

const initialState = { step: 'IDLE' };

const reducer = (state, action) => {
	switch (action.type) {
		case 'IDLE':
			return { ...state, step: 'IDLE' };
		case 'INPUT':
			return { ...state, step: 'INPUT' };
		case 'OUTPUT':
			return { ...state, step: 'OUTPUT' };
		case 'RESET':
			return { ...state, step: 'IDLE' };
		default:
			throw new Error('Unsupported action type:', action.type);
	}
};

export const RecommandContext = createContext();

export const RecommandProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { step } = state;
	return (
		<RecommandContext.Provider value={{ dispatch, step }}>{children}</RecommandContext.Provider>
	);
};
