import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Image, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import logoPegadaianSyariah from "../../../../image/logo-pegadaian-syariah.png"

function CorporateVarian({foo}) {
    const [dropdown1Open, setDropdown1Open] = useState(false);
    const [dropdown2Open, setDropdown2Open] = useState(false);

    const toggleDropdown1 = () => setDropdown1Open(!dropdown1Open);
    const toggleDropdown2 = () => setDropdown2Open(!dropdown2Open);

    return (
        <Navbar className="corporate" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <Image src={logoPegadaianSyariah} height="48" alt="Logo Pegadaian Syariah"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto my-2 my-lg-0"  style={{ maxHeight: '100px' }} navbarScroll >
                        <NavDropdown title={
                            <>
                                <span>Produk dan Layanan</span>
                                <span className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.12266 9.2925L12.0027 13.1725L15.8827 9.2925C16.2727 8.9025 16.9027 8.9025 17.2927 9.2925C17.6827 9.6825 17.6827 10.3125 17.2927 10.7025L12.7027 15.2925C12.3127 15.6825 11.6827 15.6825 11.2927 15.2925L6.70266 10.7025C6.31266 10.3125 6.31266 9.6825 6.70266 9.2925C7.09266 8.9125 7.73266 8.9025 8.12266 9.2925Z" fill="#939597"/>
                                    </svg>
                                </span>
                            </>
                            }
                            id="basic-nav-dropdown1" open={dropdown1Open} onClick={toggleDropdown1}
                        >
                            <Row>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Produk dan Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Produk Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">dan Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Produk dan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Dan</NavDropdown.Item>
                                    </div>
                                </Col>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Produk dan Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Produk Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">dan Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Produk dan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Dan</NavDropdown.Item>
                                    </div>
                                </Col>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Produk dan Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Produk Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">dan Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Produk dan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Dan</NavDropdown.Item>
                                    </div>
                                </Col>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Produk dan Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Produk Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">dan Layanan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Produk dan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Dan</NavDropdown.Item>
                                    </div>
                                </Col>
                            </Row>
                        </NavDropdown>
                        <NavDropdown title={
                            <>
                                <span>Hubungan Investor</span>
                                <span className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.12266 9.2925L12.0027 13.1725L15.8827 9.2925C16.2727 8.9025 16.9027 8.9025 17.2927 9.2925C17.6827 9.6825 17.6827 10.3125 17.2927 10.7025L12.7027 15.2925C12.3127 15.6825 11.6827 15.6825 11.2927 15.2925L6.70266 10.7025C6.31266 10.3125 6.31266 9.6825 6.70266 9.2925C7.09266 8.9125 7.73266 8.9025 8.12266 9.2925Z" fill="#939597"/>
                                    </svg>
                                </span>
                            </>
                            }
                            id="basic-nav-dropdown2" open={dropdown2Open} onClick={toggleDropdown2}
                        >
                            <Row>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Hubungan Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan</NavDropdown.Item>
                                    </div>
                                </Col>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Hubungan Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan</NavDropdown.Item>
                                    </div>
                                </Col>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Hubungan Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan</NavDropdown.Item>
                                    </div>
                                </Col>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Hubungan Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan Investor</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hubungan</NavDropdown.Item>
                                    </div>
                                </Col>
                            </Row>
                        </NavDropdown>
                        <NavDropdown title={
                            <>
                                <span>Profil Korporasi</span>
                                <span className="icon">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.12266 9.2925L12.0027 13.1725L15.8827 9.2925C16.2727 8.9025 16.9027 8.9025 17.2927 9.2925C17.6827 9.6825 17.6827 10.3125 17.2927 10.7025L12.7027 15.2925C12.3127 15.6825 11.6827 15.6825 11.2927 15.2925L6.70266 10.7025C6.31266 10.3125 6.31266 9.6825 6.70266 9.2925C7.09266 8.9125 7.73266 8.9025 8.12266 9.2925Z" fill="#939597"/>
                                    </svg>
                                </span>
                            </>
                            }
                            id="basic-nav-dropdown2" open={dropdown2Open} onClick={toggleDropdown2}
                        >
                            <Row>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Profil Korporasi</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Profil</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Korporasi</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Profil Korporasi</NavDropdown.Item>
                                    </div>
                                </Col>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Profil Korporasi</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Profil</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Korporasi</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Profil Korporasi</NavDropdown.Item>
                                    </div>
                                </Col>
                                <Col className='mb-3' lg={3} md={3} xs={12}>
                                    <div className="border-less list-group">
                                        <h6>TEST DROPDOWN</h6>
                                        <NavDropdown.Item href="#">Profil Korporasi</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Profil</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Korporasi</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Profil Korporasi</NavDropdown.Item>
                                    </div>
                                </Col>
                            </Row>
                        </NavDropdown>
                        <Nav.Link href="#">Berita</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CorporateVarian;

