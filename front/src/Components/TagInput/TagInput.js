import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tag from './Tag';
import Input from './Input';

const TagInput = props => {
	const [tagState, setTagState] = useState({ tag: '', isFocused: false });
	const [isFocus, setIsFocus] = usestate(false);
	const [isBlur, setIsBlur] = usestate(false);

	const focus = () => {
		if (this.input && typeof this.input.focus === 'function') {
			this.input.focus();
		}

		this.handleOnFocus();
	};

	const blur = () => {
		if (this.input && typeof this.input.blur === 'function') {
			this.input.blur();
		}

		this.handleOnBlur();
	};

	const accept = () => {
		let tag = this._tag();

		if (tag !== '') {
			tag = this._makeTag(tag);
			return this._addTags([tag]);
		}

		return false;
	};

	const addTag = tag => {
		return this._addTags([tag]);
	};

	const clearInput = () => {
		this._clearInput();
	};

	const handlePaste = e => {
		let { addOnPaste, pasteSplit } = this.props;

		if (!addOnPaste) {
			return;
		}

		e.preventDefault();

		let data = getClipboardData(e);
		let tags = pasteSplit(data).map(tag => this._makeTag(tag));

		this._addTags(tags);
	};

	const handleKeyDown = e => {
		if (e.defaultPrevented) {
			return;
		}

		let { value, removeKeys, addKeys } = this.props;
		const tag = this._tag();
		let empty = tag === '';
		let keyCode = e.keyCode;
		let key = e.key;
		let add = addKeys.indexOf(keyCode) !== -1 || addKeys.indexOf(key) !== -1;
		let remove = removeKeys.indexOf(keyCode) !== -1 || removeKeys.indexOf(key) !== -1;

		if (add) {
			let added = this.accept();
			if (this._shouldPreventDefaultEventOnAdd(added, empty, keyCode)) {
				e.preventDefault();
			}
		}

		if (remove && value.length > 0 && empty) {
			e.preventDefault();
			this._removeTag(value.length - 1);
		}
	};

	const handleClick = e => {
		if (e.target === this.div) {
			this.focus();
		}
	};

	const handleChange = e => {
		let { onChangeInput } = this.props;
		let { onChange } = this.props.inputProps;
		let tag = e.target.value;

		if (onChange) {
			onChange(e);
		}

		if (this.hasControlledInput()) {
			onChangeInput(tag);
		} else {
			this.setState({ tag });
		}
	};

	const handleOnFocus = e => {
		let { onFocus } = this.props.inputProps;

		if (onFocus) {
			onFocus(e);
		}

		this.setState({ isFocused: true });
	};

	const handleOnBlur = e => {
		let { onBlur } = this.props.inputProps;

		this.setState({ isFocused: false });

		if (e == null) {
			return;
		}

		if (onBlur) {
			onBlur(e);
		}

		if (this.props.addOnBlur) {
			const tag = this._makeTag(e.target.value);
			this._addTags([tag]);
		}
	};

	const handleRemove = tag => {
		this._removeTag(tag);
	};

	const inputProps = () => {
		// eslint-disable-next-line
		let { onChange, onFocus, onBlur, ...otherInputProps } = this.props.inputProps;

		let props = {
			...defaultInputProps,
			...otherInputProps,
		};

		if (this.props.disabled) {
			props.disabled = true;
		}

		return props;
	};

	const inputValue = props => {
		return props.currentValue || props.inputValue || '';
	};

	const hasControlledInput = () => {
		const { inputValue, onChangeInput } = this.props;

		return typeof onChangeInput === 'function' && typeof inputValue === 'string';
	};

	const componentDidMount = () => {
		if (this.hasControlledInput()) {
			return;
		}

		this.setState({
			tag: this.inputValue(this.props),
		});
	};
	/* 
    componentWillReceiveProps => unsafe, 
    change to componentDidUpdate 
    */

	const componentDidUpdate = nextProps => {
		/* istanbul ignore next */
		if (this.hasControlledInput()) {
			return;
		}

		if (!this.inputValue(nextProps)) {
			return;
		}

		this.setState({
			tag: this.inputValue(nextProps),
		});
	};
	return;
};

TagInput.PropTypes = {
	focusedClassName: PropTypes.string,
	addKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	addOnBlur: PropTypes.bool,
	addOnPaste: PropTypes.bool,
	currentValue: PropTypes.string,
	inputValue: PropTypes.string,
	inputProps: PropTypes.object,
	onChange: PropTypes.func.isRequired,
	onChangeInput: PropTypes.func,
	removeKeys: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
	renderInput: PropTypes.func,
	renderTag: PropTypes.func,
	renderLayout: PropTypes.func,
	pasteSplit: PropTypes.func,
	tagProps: PropTypes.object,
	onlyUnique: PropTypes.bool,
	value: PropTypes.array.isRequired,
	maxTags: PropTypes.number,
	validate: PropTypes.func,
	validationRegex: PropTypes.instanceOf(RegExp),
	disabled: PropTypes.bool,
	tagDisplayProp: PropTypes.string,
	preventSubmit: PropTypes.bool,
};

const defaultProps = {
	className: 'react-tagsinput',
	focusedClassName: 'react-tagsinput--focused',
	addKeys: [9, 13],
	addOnBlur: false,
	addOnPaste: false,
	inputProps: {},
	removeKeys: [8],
	renderInput: defaultRenderInput,
	renderTag: defaultRenderTag,
	renderLayout: defaultRenderLayout,
	pasteSplit: defaultPasteSplit,
	tagProps: { className: 'react-tagsinput-tag', classNameRemove: 'react-tagsinput-remove' },
	onlyUnique: false,
	maxTags: -1,
	validate: () => true,
	validationRegex: /.*/,
	disabled: false,
	tagDisplayProp: null,
	preventSubmit: true,
};

const defaultRenderLayout = (tagComponents, inputComponent) => {
	return (
		<span>
			{tagComponents}
			{inputComponent}
		</span>
	);
};

export default TagInput;
