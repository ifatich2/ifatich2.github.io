import Badge from 'react-bootstrap/Badge';
import PropTypes from "prop-types";

export const GBadge = (props) => {
    return (
      <Badge bg={props.bg}>
        {props.BadgeContent}
      </Badge>
    );
};  

GBadge.propTypes = {
    BadgeContent: PropTypes.string,
    bg: PropTypes.string
};

GBadge.defaultProps = {
    BadgeContent: "Status",
    bg: "success"
};

export default GBadge;