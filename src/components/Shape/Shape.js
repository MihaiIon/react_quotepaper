import React from "react";
import PropTypes from "prop-types";

// Constant
import { SHAPE__SIZE } from "./core/constants";

// Helpers
import { getSize } from "../../helpers";
import { getIcon } from "./core/helpers";

// Component
// ======================================================

function Shape({ shape, tiny }) {
  const Icon = getIcon(shape);
  return (
    <div className="c-shape">
      <div className="c-shape_icon">
        <Icon style={{ color: "white", width: getSize(tiny ? SHAPE__SIZE.TINY : SHAPE__SIZE.DEFAULT) }} />
      </div>
    </div>
  );
}

Shape.propTypes = {
  tiny: PropTypes.bool.isRequired,
  shape: PropTypes.number.isRequired
};

export default Shape;
