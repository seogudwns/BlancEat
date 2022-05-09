import React, { useReducer, createContext } from 'react';
import { RecommandStates } from '../../Commons/consts';

const initialState = { step: RecommandStates.IDLE };

const reducer = (state, action) => {
	switch (action.type) {
		case RecommandStates.IDLE:
			return { ...state, step: RecommandStates.IDLE };
		case RecommandStates.INPUT:
			return { ...state, step: RecommandStates.INPUT };
		case RecommandStates.OUTPUT:
			return { ...state, step: RecommandStates.OUTPUT };
		case RecommandStates.RESET:
			return { ...state, step: RecommandStates.IDLE };
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
