import React from "react";
import PropTypes from "prop-types";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Stack from 'react-bootstrap/Stack';
import iconSpan from "../../../../../image/icon-webp/Active.webp"
import { Image } from "react-bootstrap";

export const VariantProgress = ({ title, saldo, peringkat, btnLink, buttonValue, ...props}) => {
  return (
    <div className="card varian-progress">
        <div className="card-body">
            <Stack direction="horizontal">
                <h5 className="card-title"> { title } </h5>
                <p className="ms-auto"> { saldo } </p>
            </Stack>
            <ProgressBar className="mt-3 mb-2" now={75} />
            <Stack direction="horizontal">
                <p className="mb-0 bottom-icon"> 
                    <span> <Image src={iconSpan} width={20} height={20} alt="icon" /> </span>
                    { peringkat } 
                </p>
                <button className="btn btn-link ms-auto">
                    { btnLink }
                </button>
            </Stack>
        </div>
    </div>
  )
}

VariantProgress.propTypes = {
    title: PropTypes.string.isRequired,
    saldo: PropTypes.string.isRequired,
    peringkat: PropTypes.string.isRequired,
    btnLink: PropTypes.string.isRequired
};

VariantProgress.defaultProps = {
    title: "Karir",
    saldo: "Rp 1.125.000 / Rp 2.500.000",
    peringkat: "Kamu ada di peringkat 3.880.000 !",
    btnLink: "Go Some Where !",
};

export default VariantProgress;