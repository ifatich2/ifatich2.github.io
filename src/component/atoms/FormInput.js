import React, { useEffect, useState } from 'react';
import { Form, InputGroup } from "react-bootstrap";
import classNames from "classnames";
import { Eye, EyeSlash } from "react-bootstrap-icons";

const FormInput = ({
                       leftIcon,
                       leftIconOnClick,
                       rightIcon,
                       rightIconOnClick,
                       rightAction,
                       rightActionRef,
                       ref,
                       type = "text",
                       placeholder,
                       style,
                       className,
                       name,
                       registerPropsState,
                       register = () => ({}),
                       ...props
                   }) => {
    const [leftIconOnClickProp, setLeftIconOnClickProp] = useState({});
    const [rightIconOnClickProp, setRightIconOnClickProp] = useState({});
    const [typeState, setTypeState] = useState(type);
    const [showPassword, setShowPassword] = useState(false);
    const [rightIconState, setRightIconState] = useState(rightIcon);
    const formControlClassName = classNames(leftIcon && "left-icon",
        (rightIconState || rightAction) && (rightIconState ? "right-icon" : "right-action"));


    useEffect(() => {
        setTypeState(type);
        if (type === "password") {
            setRightIconOnClickProp({
                onClick: () => {
                    setShowPassword(!showPassword);
                }
            });
        }

    }, [type, showPassword]);

    useEffect(() => {
        if (type !== "password") {
            setTypeState(type);
            return;
        }
        if (showPassword) {
            setTypeState("text");
            setRightIconState(<EyeSlash />);
            return;
        }
        setTypeState("password");
        setRightIconState(<Eye />);

    }, [type, showPassword]);

    useEffect(() => {
        if (leftIconOnClick) {
            setLeftIconOnClickProp({
                onClick: leftIconOnClick
            });
        }
    }, [leftIconOnClick]);

    useEffect(() => {
        if (type !== "password" && rightIconOnClick) {
            setRightIconOnClickProp({
                onClick: rightIconOnClick
            });
        }
    }, [type, rightIconOnClick]);

    return <InputGroup
        className={formControlClassName}>
        {leftIcon &&
            <div className={classNames("icon-wrapper", Object.keys(leftIconOnClickProp).length > 0 && "icon-wrapper--btn")}
                 {...leftIconOnClickProp}>
                {leftIcon}
            </div>
        }

        <Form.Control
            ref={ref}
            type={typeState}
            placeholder={placeholder}
            style={style}
            className={className}
            {...props}
            {...register(name, registerPropsState)} />

        {(rightIconState || rightAction) &&
            <div className={classNames("icon-wrapper", Object.keys(rightIconOnClickProp).length > 0 && "icon-wrapper--btn")}
                 {...rightIconOnClickProp}
                 ref={rightActionRef}>
                {rightIconState || rightAction}
            </div>
        }
    </InputGroup>
};

export default FormInput;