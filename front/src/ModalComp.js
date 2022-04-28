import ModalPortal from './ModalPortal';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
	background: ${props => props.background};
`;

const ModalComp = ({ show, setShow, title, main, children }) => {
	return (
		<ModalPortal>
			<StyledModal show={show} close={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>{title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{main}</Modal.Body>
				<Modal.Footer>{children}</Modal.Footer>
			</StyledModal>
		</ModalPortal>
	);
};
