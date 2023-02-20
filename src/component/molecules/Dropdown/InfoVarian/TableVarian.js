import React, { useState } from 'react';
import Button from '../../../atoms/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';

function TableVarian({buttonValue, descValue, borderType, buttonValue2, buttonValue3, titleValue, display, bodyData, ...props}) {
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
                    <p className='description-offcanvas mb-3'>
                        {descValue}
                    </p>
                    <Table striped bordered hover className={"rounded-corners " + props.className}>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bodyData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.username}</td>
                                </tr>
                            ))}
                        </tbody>


                    </Table>
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

export default TableVarian;
