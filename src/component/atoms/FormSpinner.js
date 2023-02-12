import { Spinner } from "react-bootstrap";
import classNames from "classnames";

export const FormSpinner = ({className, ...props}) => {
    return <span className="ms-2">
        <Spinner animation="border"
                 size="sm"
                 className={classNames(className)} {...props}/>
    </span>
}