import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from '../../atoms/Button';
import classNames from 'classnames';
import propTypes from 'prop-types';

const AlertVarian = ({ children,  variant, className, ...props }) => {
    const AlertVarian = `alert-${variant}`;
    const AlertClassName = classNames(AlertVarian, className);
    const [show, setShow] = useState(false);

    if (show) {
        return  (
            <Alert className = {AlertClassName} onClose={() => setShow(false)} dismissible>
                <Alert.Heading></Alert.Heading>
                {children}
            </Alert>
        )
    }

    return <Button onClick={() => setShow(true)}>Show Alert</Button>;

};
  
AlertVarian.propTypes = {
    variant : propTypes.oneOf(["success", "danger", "info", "warning"]),
    className : propTypes.string
};
  
AlertVarian.defaultProps = {
    variant : "",
    className : ""
}
export default AlertVarian;