import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

function BasicOverlay() {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
        <b>
            Hit Me ! 
            <span className='ms-1'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" ref={target} onClick={() => setShow(!show)}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9 1.5C13.1421 1.5 16.5 4.85786 16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5ZM9 3.45C5.93482 3.45 3.45 5.93482 3.45 9C3.45 12.0652 5.93482 14.55 9 14.55C12.0652 14.55 14.55 12.0652 14.55 9C14.55 5.93482 12.0652 3.45 9 3.45ZM9.1875 7.875C9.67291 7.875 10.0722 8.24391 10.1202 8.71665L10.125 8.8125V12.1875C10.125 12.7053 9.70527 13.125 9.1875 13.125C8.70209 13.125 8.30285 12.7561 8.25484 12.2834L8.25 12.1875V9.75H8.0625C7.57709 9.75 7.17785 9.38109 7.12984 8.90835L7.125 8.8125C7.125 8.32709 7.49391 7.92785 7.96665 7.87984L8.0625 7.875H9.1875ZM8.925 7.35C9.5049 7.35 9.975 6.8799 9.975 6.3C9.975 5.7201 9.5049 5.25 8.925 5.25C8.3451 5.25 7.875 5.7201 7.875 6.3C7.875 6.8799 8.3451 7.35 8.925 7.35Z" fill="#58585B"/>
                </svg>
            </span>
        </b>
        <Overlay target={target.current} show={show} placement="bottom">
            {(props) => (
            <Tooltip id="overlay-example" {...props}>
                Heyy, Ganbatte guys !!
            </Tooltip>
            )}
        </Overlay>
        </>
    );
}

export default BasicOverlay ;