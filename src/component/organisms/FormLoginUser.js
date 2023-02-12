import { Form } from "react-bootstrap";
import Button from "component/atoms/Button/Button";

const FormLoginUser = () => {
    const handleOnSubmitLoginUser = (event) => {
        event.preventDefault();
    };

    return <Form onSubmit={handleOnSubmitLoginUser}>
        <Form.Group className="mb-3"
                    controlId="formBasicEmail">
            <Form.Label>Email atau Nomor Telpon</Form.Label>
            <Form.Control type="text"
                          placeholder="Enter email"
                          required={true}/>
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3"
                    controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                          placeholder="Password"/>
        </Form.Group>
        <Button variant="primary"
                type="submit">
            Masuk
        </Button>
        <div>
            <a href="#!">Lupa password?</a>
        </div>
    </Form>
}

export default FormLoginUser;