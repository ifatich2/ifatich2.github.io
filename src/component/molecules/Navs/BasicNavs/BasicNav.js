import React, { useState } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

function BasicNav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  return (
    <Nav>
        <Nav.Link href="#">Produk</Nav.Link>
        <Nav.Link href="#">Promo</Nav.Link>
        <NavDropdown title={
                        <>
                        <span>Artikel</span>
                        <span className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12266 9.2925L12.0027 13.1725L15.8827 9.2925C16.2727 8.9025 16.9027 8.9025 17.2927 9.2925C17.6827 9.6825 17.6827 10.3125 17.2927 10.7025L12.7027 15.2925C12.3127 15.6825 11.6827 15.6825 11.2927 15.2925L6.70266 10.7025C6.31266 10.3125 6.31266 9.6825 6.70266 9.2925C7.09266 8.9125 7.73266 8.9025 8.12266 9.2925Z" fill="#939597"/>
                            </svg>
                        </span>
                        </>
                    } 
                    id="Artikel" 
                    onMouseEnter={() => setShowDropdown(true)}  
                    onMouseLeave={() => setShowDropdown(false)} 
                    show={showDropdown} 
        >
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">Acara</Nav.Link>
        <NavDropdown title={
                        <>
                        <span>Simulasi</span>
                        <span className="icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.12266 9.2925L12.0027 13.1725L15.8827 9.2925C16.2727 8.9025 16.9027 8.9025 17.2927 9.2925C17.6827 9.6825 17.6827 10.3125 17.2927 10.7025L12.7027 15.2925C12.3127 15.6825 11.6827 15.6825 11.2927 15.2925L6.70266 10.7025C6.31266 10.3125 6.31266 9.6825 6.70266 9.2925C7.09266 8.9125 7.73266 8.9025 8.12266 9.2925Z" fill="#939597"/>
                            </svg>
                        </span>
                        </>
                    } 
                    id="simulasi" 
                    onMouseEnter={() => setShowDropdown1(true)}  
                    onMouseLeave={() => setShowDropdown1(false)} 
                    show={showDropdown1} 
        >
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#">Ebook</Nav.Link>
    </Nav>
  );
}

export default BasicNav;