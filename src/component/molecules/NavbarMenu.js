import { Nav, Navbar } from "react-bootstrap";
import { useRouter } from "next/router";
import LinkNavbar from "../atoms/LinkNavbar";

const NavbarMenu = ({navbarLinks}) => {
    const router = useRouter();

    return <Navbar.Collapse className="justify-content-end">
        <Nav>
            {navbarLinks.length > 0 && navbarLinks.map((object, index) => {
                return <LinkNavbar key={index}
                                   path={object.path || object.url || object.href}
                                   title={object.title || object.name}
                                   active={object.path === router.pathname || object.url === router.pathname || object.href === router.pathname}/>
            })}
        </Nav>
    </Navbar.Collapse>
};

export default NavbarMenu;