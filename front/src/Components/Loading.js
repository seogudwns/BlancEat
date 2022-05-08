import React from 'react';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1rem;
`;

function Loader({ type, color, message }) {
	return (
		<div>
			<div
				style={{
					position: 'fixed',
					top: '50%',
					left: '50%',
					width: '20rem',
					height: '20rem',
					transform: 'translate(-50%, -50%)',
					backgroundColor: '#44444444',
					color: 'white',
					textAlign: 'center',
					borderRadius: '4rem',
				}}
			>
				<h2>{message}</h2>
				<ContentContainer>
					<ReactLoading type={type} color={color} height={'70%'} width={'70%'} />
				</ContentContainer>
			</div>
		</div>
	);
}
export default Loader;
