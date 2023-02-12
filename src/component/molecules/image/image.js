import React from 'react';
import PropTypes from "prop-types";

function Image({ src, base, alt, width, height, className }) {
  return (
    <img
      src={ base+src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}

Image.propTypes = {
    base: PropTypes.string.isRequired,
};

Image.defaultProps = {
    base: "https://bucket.pegadaian.co.id/design-system-salt-bucket/assets/",
};

export default Image;