import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames-helper";

// Constants
import { QUOTE_CYCLER__INTERVAL, QUOTE_CYCLER__HIDE_TIME } from "../QuoteCycler/core/constants";

// Helpers
import { computeTinyShapeObjects, getFireworksStyles } from "./core/helpers";

// Components
import Firework from "./components/Firework";
import TinyFirework from "./components/TinyFirework";

function Fireworks({ show, right, top, shape }) {
  const [tinyShapes, setTinyShapes] = useState(computeTinyShapeObjects(right, top));
  const styles = getFireworksStyles(right, top);

  useEffect(() => {
    const interval = setInterval(() => {
      setTinyShapes(computeTinyShapeObjects(right, top, true));
      setTimeout(() => {
        setTinyShapes(computeTinyShapeObjects(right, top));
      }, QUOTE_CYCLER__HIDE_TIME);
    }, QUOTE_CYCLER__INTERVAL);
    return () => clearInterval(interval);
  });

  return (
    <div className={cn("c-fireworks", ["-top", "-bottom", top], ["-right", "-left", right])} style={styles}>
      <Firework show={show} shape={shape} />
      <div className="c-fireworks_group">
        {tinyShapes.map(item => (
          <TinyFirework shape={shape} {...item} />
        ))}
      </div>
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
