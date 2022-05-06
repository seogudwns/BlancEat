import React from 'react';

import { PageContainer } from '../Styles/stylePages';
import FormikTagInput from './FormikTagInput';
import ReactFormikTagsInput from './ReactFormikTagsInput';
import styled from 'styled-components';

const Container = styled.div`
	height: 500px;
	justify-content: center;
	align-items: center;
	padding-top: 100px;
`;

const Testpage = () => {
	return (
		<PageContainer fluid>
			<Container>
				<FormikTagInput />
				<br />
				<br />
				<ReactFormikTagsInput />
			</Container>
		</PageContainer>
	);
};

export default Testpage;
