import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";


export const BasicCheck = ({ items, ...props }) => {
    const temp = items.findIndex((item) => item.checked);
    const [selected, setSelected] = useState(temp);

    return (
        <div className="d-flex">
            {items.map((item, idx) => (
                <label
                    htmlFor={`checkbox-${idx + 1}`}
                    onClick={() => setSelected(idx)}
                    key={idx}
                    className={`d-inline-flex input`}
                >
                    <Form.Check.Input type="checkbox"
                        id={`checkbox-${idx + 1}`}
                        value={item.value}
                        name="checkbox"
                        disabled={item.disabled}
                        onChange={() => setSelected(idx)} />
                    <h6 className="ms-2">{item.label}</h6>
                </label>
            ))}
        </div>
    );    
    
};

BasicCheck.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            disabled: PropTypes.bool,
            value: PropTypes.string,
            label: PropTypes.string,
        })
    ),
};    

BasicCheck.defaultProps = {
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

export default BasicCheck;