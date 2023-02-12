import Badge from 'react-bootstrap/Badge';
import PropTypes from "prop-types";

export const GBadge = ({ BadgeContent, ...props }) => {
    return (
        <Badge bg={props.bg}>
            { BadgeContent }
        </Badge>
    )
}

GBadge.propTypes = {
    BadgeContent: PropTypes.string,
    bg: PropTypes.string
};

GBadge.defaultProps = {
    BadgeContent: "Status",
    bg: "success"
};

export default GBadge;