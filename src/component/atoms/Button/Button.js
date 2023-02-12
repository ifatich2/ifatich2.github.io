import React from "react";
import PropTypes from "prop-types";
import ButtonRipple from "./ButtonRipple";
import classNames from "classnames";


const Button = ({
                    children,
                    variant,
                    size,
                    className,
                    leftIcon,
                    rightIcon,
                    ...props
                }) => {
    const buttonVariant = `btn-${variant}`;
    const buttonClassName = classNames(buttonVariant, className);

    return <ButtonRipple size={size} className={buttonClassName} {...props}>
        {leftIcon && <span className="btn-left-icon">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="btn-right-icon">{rightIcon}</span>}
    </ButtonRipple>;
};

Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "secondary", "tertiary", "neutral"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    className: PropTypes.string,
    leftIcon: PropTypes.element,
    rightIcon: PropTypes.element
};

Button.defaultProps = {
    variant: "primary",
    size: "md",
    className: "",
    leftIcon: null,
    rightIcon: null
};

export default Button;