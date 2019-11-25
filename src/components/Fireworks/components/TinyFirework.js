import React from "react";
import PropTypes from "prop-types";
import { Spring } from "react-spring/renderprops";

// Helpers
import { getSize } from "../../../helpers";

// Components
import Firework from "./Firework";

function TinyFirework({ show, delay, x, y, shape, key }) {
  return (
    <Spring
      delay={delay}
      from={{ opacity: 0, transform: `translate3d(0em, 0em, 0)` }}
      to={{
        opacity: show ? 1 : 0,
        transform: `translate3d(${getSize(x)},${getSize(y)},0)`
      }}
    >
      {props => (
        <div key={key} className="c-fireworks_tiny-firework" style={props}>
          <Firework show={show} shape={shape} tiny />
        </div>
      )}
    </Spring>
  );
}

TinyFirework.propTypes = {
  show: PropTypes.bool.isRequired,
  delay: PropTypes.number.isRequired,
  key: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  shape: PropTypes.number.isRequired
};

export default TinyFirework;
