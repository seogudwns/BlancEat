import React from 'react';
import PropTypes from 'prop-types';

const defaultInputProps = {
	className: 'react-tagsinput-input',
	placeholder: 'Add a tag',
};

const Input = props => {
	return;
};

const defaultRenderInput = ({ addTag, ...props }) => {
	const { onChange, value, ...other } = props;
	return <input type="text" onChange={onChange} value={value} {...other} />;
};

defaultRenderInput.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	addTag: PropTypes.func,
};

export default Input;
