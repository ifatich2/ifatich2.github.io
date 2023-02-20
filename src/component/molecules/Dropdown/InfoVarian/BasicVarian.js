import React, { useState } from 'react';
import Button from '../../../atoms/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from "../../image/image";

function BasicVarian({buttonValue, borderType, buttonValue2, buttonValue3, titleValue, subTitle, descValue, image, display}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {buttonValue}
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement={'bottom'} backdrop={'false'}>
                <Offcanvas.Header closeButton className={borderType} >
                    <Offcanvas.Title>{titleValue}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Image className="top" src={image} />
                    <p className='title-offcanvas'>
                        {subTitle}
                    </p>
                    <p className='description-offcanvas'>
                        {descValue}
                    </p>
                </Offcanvas.Body>
                <div className='px-3 pt-2 pb-3 d-grid'>
                    <Button className={"btn-block mb-2 " + display} variant="secondary" onClick={handleShow}>
                        {buttonValue2}
                    </Button>
                    <Button className={"btn-block"} variant="primary" onClick={handleShow}>
                        {buttonValue3}
                    </Button>
                </div>
            </Offcanvas>
        </>
    );
}

export default BasicVarian;