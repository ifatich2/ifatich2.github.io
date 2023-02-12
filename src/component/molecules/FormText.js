import React, { useEffect, useState } from 'react';
import AnimateHeight from "../atoms/AnimateHeight";
import { Form } from "react-bootstrap";

const FormText = ({type, show = true, triggerChange, content, ...props}) => {

    const [contentState, setContentState] = useState([]);


    useEffect(() => {
        setContentState([]);
        if (content && Array.isArray(content)) {
            setContentState(content);
        }
        if (content && typeof content === "string") {
            setContentState([content]);
        }
    }, [content]);

    const formTextClassName = (type) => {
        if (type === "valid") {
            return "valid-feedback";
        }
        if (type === "error" || type === "invalid") {
            return "invalid-feedback";
        }
        return "";
    }

    return <AnimateHeight show={show}
                          triggerChange={triggerChange}>
        <Form.Text className={formTextClassName(type)}>
            <>
                {contentState.length > 0 &&
                    contentState.map((object, index) => {
                        return <div key={index}>
                            {object}
                        </div>
                    })}
            </>
        </Form.Text>
    </AnimateHeight>
};

export default FormText;