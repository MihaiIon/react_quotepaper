import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";
import { Transition } from "react-spring/renderprops";

// Constants
import { FIREWORKS__TINY_FIREWORK__TRAIL } from "./core/constants";
import { QUOTE_CYCLER__INTERVAL } from "../QuoteCycler/core/constants";

// Helpers
import { computeTinyShapeObjects, getFireworksStyles } from "./core/helpers";
import { getSize } from "../../helpers";

// Components
import Firework from "./components/Firework";
import TinyFirework from "./components/TinyFirework";

function Fireworks({ show, right, top, shape }) {
  const [tinyShapes, setTinyShapes] = useState(computeTinyShapeObjects());
  const styles = getFireworksStyles(right, top);

  useEffect(() => {
    const interval = setInterval(() => {
      setTinyShapes(computeTinyShapeObjects());
    }, QUOTE_CYCLER__INTERVAL);
    return () => clearInterval(interval);
  });

  return (
    <div className={cn("c-fireworks", ["-top", "-bottom", top], ["-right", "-left", right])} style={styles}>
      <Firework show={show} shape={shape} />
      {/* <div className="c-fireworks_group">
        <Transition
          items={tinyShapes}
          trail={FIREWORKS__TINY_FIREWORK__TRAIL}
          keys={item => item.key}
          from={{ opacity: 0, transform: `translate3d(0em, 0em, 0)` }}
          enter={item => ({
            opacity: 1,
            transform: `translate3d(${getSize(item.x)},${getSize(item.y)},0)`
          })}
          leave={{
            opacity: 0,
            transform: "translate3d(0em, 0em, 0)"
          }}
        >
          {item => props => <TinyFirework show={show} shape={shape} style={props} />}
        </Transition>
      </div> */}
    </div>
  );
}

Fireworks.defaultProps = {
  right: false,
  top: false
};

Fireworks.propTypes = {
  right: PropTypes.bool,
  top: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  shape: PropTypes.number.isRequired
};

export default Fireworks;
