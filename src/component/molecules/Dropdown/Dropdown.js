import React, { useState } from 'react';
import Button from '../../atoms/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

function Bottomsheet() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Basic Bottomsheet
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'bottom'} backdrop={'false'}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dropdown / Bottomsheet</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Image width={'100%'} src="https://reactjs.org/logo-og.png" alt="Logo" />
                    <p className='title-offcanvas'>
                        Some text as placeholder.
                    </p>
                    <p className='description-offcanvas'>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </p>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Bottomsheet;