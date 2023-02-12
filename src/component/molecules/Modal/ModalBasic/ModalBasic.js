import React, { useState } from 'react';
import Button from "../../../atoms/Button";
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function ModalBasic({ButtonTrigger, imageUrl, imageAlt, ModalHeader, ModalTitles, ModalDescriptions, ButtonPrimary}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="ms-2" variant="primary" onClick={handleShow}>
        { ButtonTrigger }
      </Button>

      <Modal size='sm' show={show} onHide={handleClose} centered>
        <Modal.Header className='border-0 pb-0' closeButton>
          <Modal.Title>{ ModalHeader }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Image className='mb-4' width={'100%'} src={imageUrl} alt={imageAlt} />

            <h6>{ModalTitles}</h6>
            { ModalDescriptions }
        </Modal.Body>
        <Modal.Footer>
          <div className='d-grid w-100'>
            <Button variant="primary">
              {ButtonPrimary}
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

ModalBasic.defaultProps = {
  ButtonTrigger: "Modal Default",
  imageUrl: "https://reactjs.org/logo-og.png",
  imageAlt: "React logo",
  ModalHeader : "Modal Header",
  ModalTitles : "Modal Title Test",
  ModalDescriptions: "Woohoo, you're reading this text in a modal!",
  ButtonSeccondary: "Close",
  ButtonPrimary: "Go Some Where"
}

export default ModalBasic;
