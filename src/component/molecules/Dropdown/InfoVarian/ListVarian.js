import React, { useState } from 'react';
import Button from '../../../atoms/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ListVarian({buttonValue, borderType, buttonValue2, buttonValue3, titleValue, display, ...props}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                {buttonValue}
            </Button>

            <Offcanvas className="listVarian" show={show} onHide={handleClose} placement={'bottom'} backdrop={'false'}>
                <Offcanvas.Header closeButton className={borderType} >
                    <Offcanvas.Title>{titleValue}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ol>
                        {props.itemList.map((item, index) => (
                            <li key={index}>
                                {item.itemList}
                            </li>
                        ))}
                    </ol>
                </Offcanvas.Body>
                <div className='px-3 pb-3 d-grid'>
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

export default ListVarian;