import React from 'react';

import StyledButton from './Styles/styleButton';
/*
react strap button varient
'outline-success' //아웃라인 스타일 초록
'outline-warning' //아웃라인스타일 빨강
'outline-light' //아웃라인스타일 흰색
*/
function Button({ children, ...props }) {
	return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
Button.defaultProps = {
	variant: 'outline-success',
};
