import React, { useState } from "react";

const BasicCounter = ({minimalCount, ...props}) => {
    const [countValue, setCount] = useState(minimalCount);

    const handleChange = (event) => {
        let newCount = parseInt(event.target.value);
        if (newCount < 0) {
            newCount = 0;
        }
        setCount(newCount);
    };

    const handleIncrement = () => {
        setCount(countValue + 1);
    };

    const handleDecrement = () => {
        if (countValue > 0) {
        setCount(countValue - 1);
        }
    };

    const addMinusClasses = `btn btn-neutral add-minus ${countValue === 0 ? "add-minus-red" : "add-minus-green"}`;

    return (
        <div className="input-group counter">
            <button className={addMinusClasses} type="button" onClick={handleDecrement} />
            <input type="text" className="form-control add-count" value={countValue} onChange={handleChange} {...props} />
            <button className="btn btn-neutral add-plus" type="button" onClick={handleIncrement} />
        </div>
    );
};

export default BasicCounter;
