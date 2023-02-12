import React from "react";
import Button from '../../../atoms/Button';
import { Card, Row, Col } from "react-bootstrap";

export const CardVarian = ({ title, body, icon, buttonValue, date, time, place, ...props}) => {
  return (
    <div className="card mb-2 card-promo">
        <Card.Img variant="top" src="https://reactjs.org/logo-og.png" alt="Logo" />
        <div className="card-body">
            <h6 className="card-title"> { title } </h6>
            <p className="card-texts"> { body } </p>
            <div className="center-content py-3 my-3">
                <Row>
                    <Col lg={4} md={4} xs={4}>
                        <h5 className="mb-2">Tanggal</h5>
                        {date}
                    </Col>
                    <Col lg={4} md={4} xs={4}>
                        <h5 className="mb-2">Waktu</h5>
                        {time}
                    </Col>
                    <Col lg={4} md={4} xs={4}>
                        <h5 className="mb-2">Tempat</h5>
                        {place}
                    </Col>
                </Row>
            </div>
            <h5 className="mb-2">Cara Registrasi :</h5>
            <ol>
                {props.itemList.map((item, index) => (
                    <li key={index}>
                        {item.itemList}
                    </li>
                ))}
            </ol>
            <div className="d-grid">
              <Button ripple="dark">{ buttonValue }</Button>
            </div>
        </div>
    </div>
  )
}

CardVarian.defaultProps = {
    title: "Diskon 40% Buka Tabungan Emas di Pegadaian",
    body: "Bangun perekonomian masyarakat Indonesia melalui kemampuanmu bersama Pegadaian. Indonesia melalui kemampuanmu",
    date: "19 Februari 2023",
    time: "23.59 AM",
    place: "Sunan Hotel Surakarta",
    itemList:[
        { itemList: "Kode promo RENCANAEMAS digunakan untuk transaksi buka Tabungan Emas." },
        { itemList: "Diskon sebesar 40%, maksimal Rp20.000." },
        { itemList: "Minimal transaksi Rp50.000,-" },
        { itemList: "Kode promo bisa digunakan pada Outlet Pegadaian, aplikasi Pegadaian Digital, dan aplikasi Pegadaian Syariah Digital." },
        { itemList: "Masa aktif kode promo berakhir pada 30 April 2021." }
    ],
    buttonValue: "Go Some Where !",

};

export default CardVarian;