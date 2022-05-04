import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
	${({ theme, color }) => {
		const selected = theme.palette[color];
		return css`
			background: ${selected};
			&:hover {
				background: ${lighten(0.1, selected)};
			}
			&:active {
				background: ${darken(0.1, selected)};
			}
			${props =>
				props.outline &&
				css`
					color: ${selected};
					background: none;
					border: 1px solid ${selected};
					&:hover {
						background: ${selected};
						color: white;
					}
				`}
		`;
	}}
`;
const sizes = {
	large: {
		height: '3rem',
		fontSize: '1.25rem',
	},
	medium: {
		height: '2.25rem',
		fontSize: '1rem',
	},
	small: {
		height: '1.75rem',
		fontSize: '0.875rem',
	},
};

const sizeStyles = css`
	${({ size }) => css`
		height: ${sizes[size].height};
		font-size: ${sizes[size].fontSize};
	`}
`;

const fullWidthStyle = css`
	${props =>
		props.fullWidth &&
		css`
			width: 100%;
			justify-content: center;
			& + & {
				margin-left: 0;
				margin-top: 1rem;
			}
		`}
`;

const StyledButton = styled.button`
	/*공통 스타일 */
	display: inline-flex;
	align-items: center;
	outline: none;
	border: none;
	border-radius: 0.25rem;
	color: white;
	font-weight: bold;
	cursor: pointer;
	padding-left: 1rem;
	padding-right: 1rem;

	/*사이즈*/
	${sizeStyles}

	/*색상*/
	${colorStyles}

	/*기타*/
	& + & {
		margin-left: 1rem;
	}
`;

function Button({
	children,
	color = 'primary',
	size = 'medium',
	outline = false,
	fullWidth = false,
	...props
}) {
	return (
		<StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...props}>
			{children}
		</StyledButton>
	);
}

export default Button;
