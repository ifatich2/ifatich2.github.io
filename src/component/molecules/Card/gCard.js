import React from "react";
import PropTypes from "prop-types";
import Button from '../../atoms/Button';
import { Card } from "react-bootstrap";

export const GCard = ({ title, body, icon, buttonValue, ...props}) => {
  return (
    <div className="card mb-2 w-360">
        <Card.Img variant="top" src="https://reactjs.org/logo-og.png" alt="Logo" />
        <div className="card-body">
            <h6 className="card-title"> { title } </h6>
            <p className="card-text"> { body } </p>
            <div className="d-grid">
              <Button ripple="dark">{ buttonValue }</Button>
            </div>
        </div>
    </div>
  )
}

GCard.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    buttonValue: PropTypes.string.isRequired,
};

GCard.defaultProps = {
    title: "Karir",
    body: "Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama Pegadaian. Indonesia melalui kemampuanmu",
    buttonValue: "Go Some Where !",
    icon: "/assets/images/icon-karir.svg",
};

export default GCard;