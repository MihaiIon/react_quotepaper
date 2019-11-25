import React from "react";
import PropTypes from "prop-types";
import { Transition } from "react-spring/renderprops";

// Components
import Shape from "../../Shape";

function Firework({ show, shape, tiny }) {
  return (
    <Transition
      items={show}
      from={{ transform: "scale(0.01)", opacity: 0 }}
      enter={() => async next => {
        await next({ transform: "scale(1.2)", opacity: 1 });
        await next({ transform: "scale(1)" });
      }}
      leave={{ transform: "scale(0.01)", opacity: 0 }}
    >
      {item => props =>
        item && (
          <div className="c-fireworks_firework" style={props}>
            <Shape shape={shape} tiny={tiny} />
          </div>
        )}
    </Transition>
  );
}

Firework.defaultProps = {
  tiny: false
};

Firework.propTypes = {
  tiny: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  shape: PropTypes.number.isRequired
};

export default Firework;
