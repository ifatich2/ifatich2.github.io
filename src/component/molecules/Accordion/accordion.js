import Accordion from 'react-bootstrap/Accordion';
import propTypes from 'prop-types';

const BasicAccordion = ({title, descriptions }) => {

    return <Accordion>
                <Accordion.Item>
                    <Accordion.Header> {title} </Accordion.Header>
                    <Accordion.Body> {descriptions} </Accordion.Body>
                </Accordion.Item>
            </Accordion>
}

BasicAccordion.propTypes = {
    title: propTypes.string.isRequired,
    descriptions: propTypes.string.isRequired,
};

BasicAccordion.defaultProps = {
    title: "",
    descriptions: ""      
};

export default BasicAccordion;