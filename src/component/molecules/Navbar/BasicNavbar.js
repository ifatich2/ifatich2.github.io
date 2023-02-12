import { Image, Navbar, Container } from 'react-bootstrap';
import logoPegadaianSyariah from "../../../image/logo-pegadaian-syariah.png"
import BasicNav from "../Navs/BasicNavs/BasicNav";

function BasicNavbar() {

    return (
        <Navbar className="basic-nav" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <Image src={logoPegadaianSyariah} height="48" alt="Logo Pegadaian Syariah"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <BasicNav />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicNavbar;