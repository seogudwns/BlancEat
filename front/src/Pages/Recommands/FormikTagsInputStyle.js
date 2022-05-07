import styled from 'styled-components';

export const RecsysInputFormStyle = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 50rem;
	justify-content: flex-start;
	font-family: 'Nanum Square';
	background-color: white;
	border-radius: 0.5rem;
	padding: 2rem;
	color: ${({ theme, color }) => (color ? color : theme.palette['dark'])};
	font-size: 1.25rem;
	font-weight: 600;
	.infoContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		flex-direction: row;
		padding: 2rem 2rem 0 2rem;
	}
	input {
		display: inline-flex;
		background-color: #fff;
		border: 1px solid #ccc;
		overflow: hidden;
		padding-left: 0.25rem;
		padding-top: 0.25rem;
		margin: 0 1rem 0 1rem;
		border-radius: 0.5rem;
	}
	label {
		text-align: center;
	}
	label + label {
		margin-left: 1.5rem;
	}
	.footer {
		display: flex;
		justify-content: center;
		Button + Button {
			margin-left: 10rem;
		}
	}
`;

export const FormikTagsInputStyle = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 50rem;
	text-align: center;
	background-color: #ffffff;
	padding: 2rem;
	text-align: center;
	font-family: 'Nanum Square';
	z-index: 1;
	.tagsinput_label {
		width: 6rem;
	}
	.tagsinput_container {
		display: flex;
		width: 100%;
		justify-content: flex-start;
		flex-direction: row;
		align-items: center;
		margin: 1rem 0.5rem;
	}
	.react-tagsinput {
		display: inline-flex;
		width: 100%;

		background-color: #fff;
		border: 1px solid #ccc;
		overflow: visible;

		padding-left: 0.25rem;
		padding-top: 0.25rem;
		border-radius: 0.5rem;

		span {
			display: inline-flex;
		}
	}

	.react-tagsinput--focused {
		border-color: #a5d24a;
	}

	.react-tagsinput-tag {
		background-color: #075f3a;
		border-radius: 0.25rem;
		border: 1px solid #a5d24a;
		color: white;
		display: inline-block;
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
		margin-right: 0.5rem;
		padding: 0.25rem;
		padding-right: 0.5rem;
		padding-left: 0.5rem;
	}

	.react-tagsinput-remove {
		cursor: pointer;
		font-weight: bold;
	}

	.react-tagsinput-tag a::before {
		content: ' x';
	}

	.react-tagsinput-tag a {
		text-decoration: none;
		color: #a5d24a;
	}

	.react-tagsinput-input {
		background: transparent;
		border: 0;
		color: #777;
		font-family: sans-serif;
		font-size: 1rem;
		font-weight: 400;
		margin-bottom: 0.4rem;
		margin-top: 1px;
		outline: none;
		padding: 0.25rem;
		width: 10rem;
	}

	.react-autosuggest__container {
		position: relative;
		z-index: 10;
		overflow: visible;
	}

	.react-autosuggest__input {
		width: 100%;
		height: 36px;
		padding: 10px;
		border: 1px solid green;
		border-radius: 4px;
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
	}

	.react-autosuggest__input--focused {
		outline: none;
	}

	.react-autosuggest__input--open {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.react-autosuggest__suggestions-container {
		display: none;
	}

	.react-autosuggest__suggestions-container--open {
		display: block;
		position: absolute;
		top: 33px;
		width: 100%;
		min-width: 160px;
		margin-left: 1px;
		background-color: #ffffff;
		border-radius: 0 0 4px 4px;
		z-index: 12;
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
		background-clip: padding-box;
	}

	.react-autosuggest__suggestions-list {
		margin: 0;
		padding: 0;
		list-style-type: none;
	}

	.react-autosuggest__suggestion {
		cursor: pointer;
		padding: 10px 20px;
	}

	.react-autosuggest__suggestion--highlighted {
		background-color: green;
	}
`;
