/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Button from '../../Components/Button';

const clearButtonStyle = styled(Button)`
	color: blue;
`;

const ReactTagStyle = styled.div`
	font-family: 'Nanum Square'
	.ReactTags :global {
		padding: 40px;
		text-align: center;
	}

	/* Example Styles for React Tags*/

	.ReactTags {
		margin: auto;
		width: 100%;
	}
	.ReactTags__tags {
		position: relative;
	}

	/* Styles for the input */
	.ReactTags__tagInput {
		border-radius: 0.25rem;
		display: inline-block;
	}
	.ReactTags__tagInput input.ReactTags__tagInputField,
	.ReactTags__tagInput input.ReactTags__tagInputField:focus {
		height: 2.5rem;
		margin: 0;
		font-size: 1rem;
		border: 1px solid #eee;
		min-width: 16rem;
		padding-left: 0.5rem;
	}

	.ReactTags__editInput {
		border-radius: 0.25rem;
	}

	.ReactTags__editTagInput {
		display: inline-flex;
	}

	/* Styles for selected tags */
	.ReactTags__selected span.ReactTags__tag {
		border: 1px solid #ddd;
		background: #63bcfd;
		color: white;
		font-size: 0.875rem;
		display: inline-block;
		padding: 0.5rem;
		margin: 0 5px;
		border-radius: 0.125rem;
	}
	.ReactTags__selected span.ReactTags__tag:first-child {
		margin-left: 0px;
	}
	.ReactTags__selected a.ReactTags__remove {
		color: #aaa;
		margin-left: 5px;
		cursor: pointer;
	}

	/* Styles for suggestions */
	.ReactTags__suggestions {
		position: absolute;
		top: 60px;
		z-index: 10;
	}
	.ReactTags__suggestions ul {
		list-style-type: none;
		box-shadow: 0.05em 0.01em 0.5em rgba(0, 0, 0, 0.2);
		background: white;
		width: 200px;
	}
	.ReactTags__suggestions li {
		border-bottom: 1px solid #ddd;
		padding: 5px 10px;
		margin: 0;
	}
	.ReactTags__suggestions li mark {
		text-decoration: underline;
		background: none;
		font-weight: 600;
	}
	.ReactTags__suggestions ul li.ReactTags__activeSuggestion {
		background: #b7cfe0;
		cursor: pointer;
	}

	.ReactTags__remove {
		border: none;
		cursor: pointer;
		background: none;
		color: white;
	}
	.ReactTags__clearAll {
		cursor: pointer;
		padding: 0.5rem;
		margin: 0.5rem;
		background: #f88d8d;
		color: #fff;
		border: none;
		align-item: center;
	}
`;
export default ReactTagStyle;
/*
	.ReactTags__clearAll {
		display: inline-flex;
		justify-contents: center;
		align-item: center;
		width: 7rem;
		height: 2rem;
		cursor: pointer;
		padding: 10px;
		margin: 10px;
		background: #f88d8d;
		color: #fff;
		border: none;
		border-radius: 10px;
	}

ReactTags__tags
ReactTags__tagInput
ReactTags__tagInputField
ReactTags__selected
ReactTags__selected ReactTags__tag
ReactTags__selected ReactTags__remove
ReactTags__suggestions
ReactTags__activeSuggestion
ReactTags__editTagInput
ReactTags__editTagInputField
ReactTags__clearAll
*/
/*

	margin: auto;
	width: 100%;
	text-align: center;

	.ReactTags__tags :global {
		position: relative;
	}
	.ReactTags__tagInput {
		width: 300px;
		background-color: blue;
		border-radius: 2px;
		display: inline-flex;
		align-items: center;
	}
	.ReactTags__tagInput input.ReactTags__tagInputField,
	.ReactTags__tagInput input.ReactTags__tagInputField:focus {
		height: 2rem;
		margin: 0;
		font-size: 12px;
		width: 70%;
		border: 1px solid #eee;
		padding: 0 4px;
		display: inline-flex;
		justify-content: center;
		flex-direction: row;
	}

	.ReactTags__selected span.ReactTags__tag {
		border: 1px solid #ddd;
		background: #eee;
		font-size: 12px;
		display: inline-flex;
		padding: 5px;
		margin: 0 5px;
		cursor: move;
		border-radius: 2px;
	}

	.ReactTags__selected a.ReactTags__remove {
		color: #aaa;
		margin-left: 5px;
		cursor: pointer;
	}

	.ReactTags__suggestions {
		position: relative;

		margin-top: 10px;

		z-index: 10;
	}
	.ReactTags__suggestions ul {
		list-style-type: none;
		box-shadow: 0.05em 0.01em 0.5em rgba(0, 0, 0, 0.2);
		background: white;
		width: 200px;
	}
	.ReactTags__suggestions li {
		border-bottom: 1px solid #ddd;
		padding: 5px 10px;
		margin: 0;
	}
	.ReactTags__suggestions li mark {
		text-decoration: underline;
		background: none;
		font-weight: 600;
	}
	.ReactTags__suggestions ul li.ReactTags__activeSuggestion {
		background: #b7cfe0;
		cursor: pointer;
	}
	.ReactTags__clearAll {
		display: inline-flex;
		justify-contents: center;
		align-item: center;
		width: 7rem;
		height: 2rem;
		cursor: pointer;
		padding: 10px;
		margin: 10px;
		background: #f88d8d;
		color: #fff;
		border: none;
		border-radius: 10px;
	}
*/
