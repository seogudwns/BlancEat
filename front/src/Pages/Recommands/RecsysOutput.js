import React, { useContext } from 'react';
import { RecommandContext } from './RecommandContext';

import FoodCard from '../../Components/FoodCard';
import ContentLabel from '../../Components/ContentLabel';
import {
	SubContainer,
	BGDiv,
	LargeText,
	LargeButton,
	CardContainerRow,
} from '../../Contents/Styles/styleContents';

const RecsysOutput = () => {
	const { step, dispatch } = useContext(RecommandContext);

	const handleClick = () => {
		dispatch({ type: 'RESET' });
	};
	return (
		<SubContainer fluid>
			<ContentLabel />
			<CardContainerRow>
				<FoodCard />
				<FoodCard />
				<FoodCard />
			</CardContainerRow>
			<LargeButton variant="success" onClick={handleClick}>
				<h3>돌아가기 {'>'}</h3>
			</LargeButton>
		</SubContainer>
	);
};

export default RecsysOutput;
