import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import Image from "../../image/image";

export const ArticleVarian = ({ title, body, icon, buttonValue, ...props}) => {
  return (
    <div className="card mb-2 w-360 card-article">
        <Card.Img variant="top" src="https://reactjs.org/logo-og.png" alt="" />
        <div className="card-body">
            <p className="label">Pengumuman Seleksi</p>
            <h6 className="card-title"> { title } </h6>
            <p className="card-text-2"> 
                <span>
                    <Image className="me-1 mt--1" src={icon} width={16} height={16} alt="" />
                </span>
                { body } 
            </p>
        </div>
    </div>
  )
}

ArticleVarian.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

ArticleVarian.defaultProps = {
    title: "Management Development Program (MDP) Batch 4",
    body: "20 Agustus 2021",
    icon: "icons/time_regular.svg",
};

export default ArticleVarian;