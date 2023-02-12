import { Card } from "react-bootstrap";
import Stack from 'react-bootstrap/Stack';
import React from "react";
import Image from "../../image/image";

export const VoucherVarian = ({ title, icon, date, ...props}) => {

    return (
        <div className="card mb-2 voucher">
            <Card.Img variant="top" src="https://reactjs.org/logo-og.png" alt="Logo" />
            <div className="card-body">
                <h6 className="card-title"> { title } </h6>
                <Stack direction="horizontal" className="copy">
                    <p className="card-text-2"> 
                        <span> <Image className="me-1 mt--1" src={icon} width={16} height={16} alt="" /> </span>
                        {date}
                    </p>
                    <button id="salin" className="btn btn-link p-0 ms-auto">
                        <h6>Gunakan</h6>
                    </button>
                </Stack>
            </div>
        </div>
    )
}

VoucherVarian.defaultProps = {
    title: "Diskon 40% Buka Tabungan Emas di Pegadaian",
    date: "08 Februari - 08 Maret 2023",
    icon: "icons/time_regular.svg",
};

export default VoucherVarian;