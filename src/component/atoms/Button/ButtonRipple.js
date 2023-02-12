import { Button as ButtonBootstrap } from "react-bootstrap";
import classNames from "classnames";


const ButtonRipple = ({
                    className,
                    children,
                    onClick,
                    ripple = "light",
                    ...props
                }) => {
    const createRipple = (event) => {
        const button = event.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.pageX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.pageY - button.offsetTop - radius}px`;
        circle.classList.add("ripple");
        const rippleComponent = button.getElementsByClassName("ripple")[0];
        if (rippleComponent) {
            rippleComponent.remove();
        }
        button.appendChild(circle);
    };

    const handleOnClick = (event) => {
        if (ripple !== undefined) {
            createRipple(event);
        }
        if (onClick) {
            onClick();
        }
    };

    return <ButtonBootstrap {...props} onClick={handleOnClick}
                            className={classNames("btn-ripple", ripple ? ('btn-ripple-' + ripple) : "", className ? className : "")}>
        <span className={classNames("btn-label")}>{children}</span>
    </ButtonBootstrap>;
};

export default ButtonRipple;