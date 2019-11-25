import React from "react";
import PropTypes from "prop-types";

// Components
import Firework from "./Firework";

function TinyFirework({ show, shape, style }) {
  return (
    <div className="c-fireworks_tiny-firework" style={style}>
      <Firework show={show} shape={shape} tiny />
    </div>
  );
}

TinyFirework.propTypes = {
  show: PropTypes.bool.isRequired,
  shape: PropTypes.number.isRequired,
  style: PropTypes.shape({}).isRequired
};

export default TinyFirework;
