// import Link from "next/link";
import { Link } from "react-bootstrap-icons";
import { Navbar } from "react-bootstrap";
import { Image } from "react-bootstrap";
// import Image from "next/image";

const LogoNavbar = () => {
    return <Link href="/"
                 passHref
                 legacyBehavior>
        <Navbar.Brand>
            <Image src="./assets/image/Ilustration-webp/empty/belum-ada-tabungan-emas.webp" height="30" alt="Logo Pegadaian Syariah"/>
        </Navbar.Brand>
    </Link>
}

export default LogoNavbar;