import { useEffect, useRef, useState } from "react";
import { default as ReactAnimateHeight } from "react-animate-height";

const AnimateHeight = ({children, show, triggerChange, ...props}) => {
    const animateHeightRef = useRef(null);

    const [height, setHeight] = useState("0");
    const [changes, setChanges] = useState();

    useEffect(() => {
        setHeight(show ? "auto" : "0");
    }, [show]);

    useEffect(() => {
        if (!show) {
            setHeight(0);
            return;
        }
        if (triggerChange !== changes) {
            setHeight("auto");
        }
        setChanges(triggerChange);
    }, [triggerChange, show, changes]);

    const setFixedHeight = () => {
        if (animateHeightRef?.current?.offsetHeight > 0) {
            setHeight(animateHeightRef.current.offsetHeight);
        }
    };

    return (
        <ReactAnimateHeight
            height={height}
            onHeightAnimationEnd={setFixedHeight}
            duration={150}
        >
            <div style={{overflow: "auto"}}
                 ref={animateHeightRef}>
                {children}
            </div>
        </ReactAnimateHeight>
    );
};

export default AnimateHeight;