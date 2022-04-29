import styled from 'styled-components';
import { Card } from 'react-bootstrap';

/*FoodCard Styles */

export const StyledCard = styled(Card)`
	width: 380px;
	height: 640px;
	border-radius: 0;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	.card-img-top {
		height: 320px;
		object-fit: cover;
	}
	.card-body {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: right;
		background-color: #fcfbfa;
	}
	.card-title {
		display: flex;
		align-items: center;
		justify-content: flex-end;

		width: 100%;
		height: 30px;

		margin-top: 4px;
		margin-left: auto;
		margin-right: 0;

		font-family: 'NanumSquare';
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 120%;
		text-align: right;

		/* Gray/600 */
		color: #3b3d3b;
	}
	.card-text {
		justify-content: flex-end;

		width: 332px;
		height: 80px;

		top: 390px;
		margin-left: auto;
		margin-right: 0;

		/* Elice/P 18 */
		font-family: 'Elice DigitalBaeum';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 150%;
		text-align: right;
		letter-spacing: 0.5px;

		/* Gray/500 */
		color: #6e726e;
	}
`;

export const Divider = styled.div`
	position: absolute;
	width: 300px;
	height: 1px;
	left: 67px;
	top: 373px;

	background: #808080;
`;
