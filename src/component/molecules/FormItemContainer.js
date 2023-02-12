import { Form } from "react-bootstrap";
import { FormSpinner } from "../atoms/FormSpinner";

const FormItemContainer = ({
                       name,
                       title,
                       isRequired,
                       isLoading,
                       children,
                       ...props
                   }) => {
    return <Form.Group className="mb-4"
                       controlId={name}>

        <Form.Label>
            {title}
            {isRequired && <span className="form-label__mandatory">*</span>}
            {isLoading && <FormSpinner />}
        </Form.Label>
            {children}

    </Form.Group>
}

export default FormItemContainer;