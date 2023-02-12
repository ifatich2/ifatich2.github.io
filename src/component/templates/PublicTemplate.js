import { Container } from "react-bootstrap";
import Navbar from "../organisms/Navbar";
import HTMLHead from "../atoms/HTMLHead";

const PublicTemplate = ({pageTitle, children}) => {
    const navbarLinks = [
        {
            title: "Animation",
            path: "/animation"
        },
        {
            title: "Contact Us CSR",
            path: "/contact-us-csr"
        },
        {
            title: "Contact Us SSR",
            path: "/contact-us-ssr"
        },
        {
            title: "Contact Us SSG",
            path: "/contact-us-ssg"
        },
        {
            title: "Login",
            path: "/login"
        },
    ];

    return <>
        <HTMLHead pageTitle={pageTitle}/>
        <Navbar navbarLinks={navbarLinks}/>
        <Container>
            {children}
        </Container>
    </>
};

export default PublicTemplate;