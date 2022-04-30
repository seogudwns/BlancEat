import styled from 'styled-components';
import { Button as btn } from 'react-bootstrap';

/*
react strap button varient
'outline-success' //아웃라인 스타일 초록
'outline-warning' //아웃라인스타일 빨강
'outline-light' //아웃라인스타일 흰색
*/
export const StyledButton = styled(btn)`
	height: 40px;
	left: 0px;
	top: 0px;

	line-height: 50px;
	text-align: center;
	border-radius: 28px;
	padding: 14px 28px;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 8px 16px;
	margin: 0px 0px;

	/* Primary/Base */

	border-radius: 10px;

	/* Inside auto layout */

	flex: none;
	order: 0;
	flex-grow: 0;

	font-family: 'NanumSquare';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 150%;
`;

export default StyledButton;
//	background: #075f3a;
//	background: #075f3a;
