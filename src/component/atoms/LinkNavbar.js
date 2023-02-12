// import Link from "next/link";
import { Nav } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

const LinkNavbar = ({path, title, active}) => {
    return <Link href={path}
                 passHref
                 legacyBehavior>
        <Nav.Link className={active && "active"}>
            {title}
        </Nav.Link>
    </Link>
}

export default LinkNavbar;