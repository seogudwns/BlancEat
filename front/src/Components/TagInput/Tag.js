import React from 'react';

const defaultRenderTag = props => {
	const { tag, key, disabled, onRemove, classNameRemove, getTagDisplayValue, ...other } = props;
	return (
		<span key={key} {...other}>
			{getTagDisplayValue(tag)}
			{!disabled && <a className={classNameRemove} onClick={e => onRemove(key)} />}
		</span>
	);
};

defaultRenderTag.propTypes = {
	key: PropTypes.number,
	tag: PropTypes.string,
	onRemove: PropTypes.func,
	classNameRemove: PropTypes.string,
	getTagDisplayValue: PropTypes.func,
};

const Tag = () => {
	return;
};

export default Tag;
