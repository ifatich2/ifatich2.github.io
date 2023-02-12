import React, { useState } from 'react';
import Button from "../../atoms/Button";
import Modal from 'react-bootstrap/Modal';

function ModalBasic({ButtonTrigger, ModalHeader, ModalTitles, ModalDescriptions, ButtonSeccondary, ButtonPrimary}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="ms-2" variant="primary" onClick={handleShow}>
        { ButtonTrigger }
      </Button>

      <Modal size='sm' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{ ModalHeader }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h6>{ModalTitles}</h6>
            { ModalDescriptions }
        </Modal.Body>
        <Modal.Footer>
          <div className='d-grid w-100'>
            <Button variant="secondary" onClick={handleClose}>
              {ButtonSeccondary}
            </Button>
            <Button className="mt-2" variant="primary">
              {ButtonPrimary}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ModalBasic.defaultProps = {
  ButtonTrigger: "Open Modal",
  ModalHeader : "Modal Header",
  ModalTitles : "Modal Title Test",
  ModalDescriptions: "Woohoo, you're reading this text in a modal!",
  ButtonSeccondary: "Close",
  ButtonPrimary: "Go Some Where"
}

export default ModalBasic;
