import React from 'react';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
	display: none;
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 99;
	background-color: rgba(0, 0, 0, 0.6);
	color: #fcfbfa;

	${openModal} {
		display: flex;
		align-items: center;
	}
`;

const StyledButton = styled.button`
	background: transparent;
	border-radius: 5px;
	border: 1px solid #fcfbfa;
	color: #fcfbfa;
	font-size: 1rem;
	cursor: pointer;
`;

const StyledSection = styled.section`
	width: 90%;
	max-width: 400px;
	margin: 0 auto;
	background-color: #075f3a;
`;

const StyledHeader = styled.header`
	position: relative;
	padding: 16px 64px 16px 16px;
	background-color: #075f3a;
	font-weight: 700;
`;

const StyledMain = styled.main`
	padding: 16px;
	border-bottom: 1px solid #dee2e6;
	border-top: 1px solid #dee2e6;
`;

const StyledFooter = styled.footer`
	padding: 12px 16px;
	text-align: right;
`;

const ModalPortal = ({ open, close, header, main, footer }) => {
	return (
		<>
			<StyledDiv {...(open ? openModal : none)}>
				{open ? (
					<StyledSection>
						<StyledHeader>
							{header}
							<StyledButton onClick={close}>&times;</StyledButton>
						</StyledHeader>
						<StyledMain>{main.children}</StyledMain>
						<StyledFooter>{footer.children}</StyledFooter>
					</StyledSection>
				) : null}
			</StyledDiv>
		</>
	);
};

export default ModalPortal;
