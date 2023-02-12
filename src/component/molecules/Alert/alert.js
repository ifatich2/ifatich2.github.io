import Alert from 'react-bootstrap/Alert';
import classNames from 'classnames';
import propTypes from 'prop-types';

const Alerts = ({ children, variant, className, ...props }) => {
  const AlertsVarian = `alert-${variant}`;
  const AlertsClassName = classNames(AlertsVarian, className);

  return <Alert className = {AlertsClassName} {...props}>
    {children}
  </Alert>
};

Alerts.propTypes = {
  variant : propTypes.oneOf(["success", "danger", "info", "warning"]),
  className : propTypes.string
};

Alerts.defaultProps = {
  variant : "success",
  className : ""
}

export default Alerts;