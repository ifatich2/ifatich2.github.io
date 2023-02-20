import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Alert from 'react-bootstrap/Alert';
import classNames from 'classnames';
import propTypes from 'prop-types';

function ToastBasic({buttonValue, children, variant, className}) {
    const [show, setShow] = useState(false);
    const AlertVarian = `alert-${variant}`;
    const AlertClassName = classNames(AlertVarian, className);

    return (
        <Row>
            <Col xs={12}>
                <Toast className="w-100" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Alert className = {AlertClassName} onClose={() => setShow(false)} dismissible>
                        <Alert.Heading></Alert.Heading>
                        {children}
                    </Alert>
                </Toast>
            </Col>
            <Col xs={12} className="mb-3">
                <Button  className="mt-3" onClick={() => setShow(true)}>{buttonValue}</Button>
            </Col>
        </Row>
    );
}

ToastBasic.propTypes = {
    variant : propTypes.oneOf(["success", "danger", "info", "warning"]),
    className : propTypes.string
};
  
ToastBasic.defaultProps = {
    variant : "",
    className : ""
}

export default ToastBasic;