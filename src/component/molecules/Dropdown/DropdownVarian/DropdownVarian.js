import React, { useState, useEffect } from 'react';
import Button from '../../../atoms/Button';
import classNames from 'classnames';
import propTypes from 'prop-types';
import Offcanvas from 'react-bootstrap/Offcanvas';

function DropdownVarian({ children, className, variant, autoCloseTimeout }) {
    const [show, setShow] = useState(false);

    const VariantName = `bg-${variant}`;
    const VarianClassName = classNames(VariantName, className);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let timeout;
        if (show && autoCloseTimeout) {
            timeout = setTimeout(() => {
                handleClose();
            }, autoCloseTimeout);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [show, autoCloseTimeout]);

    const styles = {
        borderRadius: '6px 6px 0px 0px'
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Bottomsheet varian
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="bottom" backdrop="static">
                <Offcanvas.Header className={VarianClassName} style={styles} closeButton>
                    <Offcanvas.Title>
                        <p className='description-offcanvas text-white'>
                            {children}
                        </p>
                    </Offcanvas.Title>
                </Offcanvas.Header>
            </Offcanvas>
        </>
    );
}

DropdownVarian.propTypes = {
    variant : propTypes.oneOf(["success", "danger", "info", "warning"]),
    className : propTypes.string,
    autoCloseTimeout: propTypes.number
};
  
DropdownVarian.defaultProps = {
    variant : "",
    className : "",
    autoCloseTimeout: null
}

export default DropdownVarian;