import React from "react";
import PropTypes from "prop-types";
import GBadge from '../../Badge/Badge';
import { Card } from "react-bootstrap";
import bgSyariah from "./bgSyariah.svg"

export const CardVarian = ({ title, body, icon, buttonValue, hrefLink, ...props}) => {
  return (
    <a className="cardVarian" href={hrefLink}>
      <div className="card mb-2 w-360">
        <Card.Img variant="top" src="https://reactjs.org/logo-og.png" alt="Logo" />
        <Card.Img variant="top" className="top" src={bgSyariah} alt="Logo" />
        <div className="card-body">
            <Card.Img className="icon-right" src="https://reactjs.org/logo-og.png" alt="Logo" />
            <GBadge bg="info" BadgeContent="Syariah" />
            <h6 className="card-title"> { title } </h6>
            <p className="card-text"> { body } </p>
        </div>
      </div>
    </a>
  )
}

CardVarian.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    hrefLink: PropTypes.string.isRequired,
};

CardVarian.defaultProps = {
    title: "Karir",
    body: "Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama Pegadaian. Indonesia melalui kemampuanmu",
    icon: "/assets/images/icon-karir.svg",
    hrefLink: "#"
};

export default CardVarian;