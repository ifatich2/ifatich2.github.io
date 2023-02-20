import React from "react";
import Button from '../../../atoms/Button';
import Image from "../../image/image";

export const FolderVarian = ({ title, cardImage, body, icon, descIcon, buttonValue, ...props}) => {
  return (
    <div className="card mb-2 w-360 card-article">
        <Image className="top w-100" src={cardImage} alt="Logo" />
        <div className="card-body">
            <p className="card-text-2"> 
                <span>
                    <Image className="me-1 mt--1" src={icon} width={16} height={16} alt="" />
                </span>
                { descIcon } 
            </p>
            <h6 className="card-title"> { title } </h6>
            <p className="card-text"> { body } </p>
            <div className="d-grid">
              <Button variant="secondary" ripple="dark">{ buttonValue }</Button>
            </div>
        </div>
    </div>
  )
}

export default FolderVarian;