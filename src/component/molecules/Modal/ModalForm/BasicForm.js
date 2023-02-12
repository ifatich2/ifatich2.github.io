import React, { useState } from 'react';
import Button from "../../../atoms/Button";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ModalForm({ButtonTrigger, ModalHeader, ButtonSeccondary, ButtonPrimary}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="ms-2" variant="primary" onClick={handleShow}>
        {ButtonTrigger}
      </Button>

      <Modal size='sm' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title> {ModalHeader} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className='border-0 pt-0'>
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


ModalForm.defaultProps = {
  ButtonTrigger: "Form Modal",
  ModalHeader : "Modal Header",
  ButtonSeccondary: "Close",
  ButtonPrimary: "Go Some Where"
}

export default ModalForm;