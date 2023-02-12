import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";


export const BasicRadio = ({ items, ...props }) => {
    const temp = items.findIndex((item) => item.checked);
    const [selected, setSelected] = useState(temp);

    return (
        <div className="d-flex">
            {items.map((item, idx) => (
                <label
                    htmlFor={`radio-${idx + 1}`}
                    onClick={() => setSelected(idx)}
                    key={idx}
                    className={`d-inline-flex input`}
                >
                    <Form.Check.Input type="radio"
                        id={`radio-${idx + 1}`}
                        value={item.value}
                        name="radio"
                        disabled={item.disabled}
                        onChange={() => setSelected(idx)} />
                    <h6 className="ms-2">{item.label}</h6>
                </label>
            ))}
        </div>
    );    
    
};

BasicRadio.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            disabled: PropTypes.bool,
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ),
};    

BasicRadio.defaultProps = {
    items: [
        {
            disabled: false,
            value: "1",
            label: "Option 1",
        },
        {
            disabled: false,
            value: "2",
            label: "Option 2",
        },
        {
            disabled: false,
            value: "3",
            label: "Option 3",
        },
    ],
};

export default BasicRadio;