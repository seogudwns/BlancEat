import React from 'react';
import { Modal } from 'react-bootstrap';

const ModalComp = ({ show, setShow, title, main, children }) => {
	return (
		<Modal show={show} onHide={() => setShow(false)}>
			<Modal.Header closeButton>
				<Modal.Title>{title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>{main}</Modal.Body>
			<Modal.Footer>{children}</Modal.Footer>
		</Modal>
	);
};

export default ModalComp;
