import styled from 'styled-components';

export const TagInputStyle = styled.div`
    font-family: 'Nanum Square'
    .ReactTags :global {
        padding: 40px;
        text-align: center;
        font-size: 1rem;
    }
    .ReactTags {
		margin: auto;
		width: 100%;
	}

    .ReactTags__tags {
		position: relative;
	}
    .ReactTags__selected {
        display: inline-flex;
        border: 1px solid #ddd;
        min-width: 42rem;
        width: 100%;
        border-radius: 0.5rem;
    }
   .ReactTags__tagInput {
		border-radius: 0.25rem;
		display: inline-block;
       
	}
    .ReactTags__tagInput input.ReactTags__tagInputField,
	.ReactTags__tagInput input.ReactTags__tagInputField:focus {
		height: 2.5rem;
		margin: 0;
		font-size: 1rem;
		border: none;
		min-width: 12rem;
		padding-left: 0.5rem;
        outline: none;
        
	}

    .ReactTags__editInput {
		border-radius: 0.25rem;
	}

	.ReactTags__editTagInput {
		display: inline-flex;
	}
   

    .ReactTags__selected span.ReactTags__tag {
		border: 1px solid #ddd;
		background: #075f3a;
		color: white;
		font-size: 0.875rem;
		display: inline-block;
		padding: 0.5rem;
		margin: 0 5px;
		border-radius: 0.25rem;
	}
	.ReactTags__selected span.ReactTags__tag:first-child {
		margin-left: 0px;
	}
	.ReactTags__selected a.ReactTags__remove {
		color: #aaa;
		margin-left: 5px;
		cursor: pointer;
	}
    .ReactTags__suggestions {
        font-size: 1rem;
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

`;
