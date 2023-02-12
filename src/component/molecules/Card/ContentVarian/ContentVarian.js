import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

export const ContentVarian = ({ title, body, icon, buttonValue, hrefLink, ...props}) => {
  return (
      <div className="card mb-2 contentVarian">
        <Card.Img className="icon-left" src="https://reactjs.org/logo-og.png" alt="Logo" />
        <div className="card-body">
            <h6 className="card-title"> { title } </h6>
            <p className="card-text"> { body } </p>
        </div>
      </div>
  )
}

ContentVarian.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

ContentVarian.defaultProps = {
    title: "Karir",
    body: "Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama Pegadaian. Indonesia melalui kemampuanmu",
    icon: "/assets/images/icon-karir.svg",
};

export default ContentVarian;