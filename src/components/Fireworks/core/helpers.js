// ======================================================
// Components / Fireworks / Core / Helpers
// ======================================================

// Constants
import { SHAPE__SIZE } from "../../Shape/core/constants";

// Helpers
import { getSize } from "../../../helpers";

/**
 * @param {*} isTop
 * @param {*} isRight
 * @param {*} topOffset
 * @param {*} rightOffset
 * @param {*} bottomOffset
 * @param {*} leftOffset
 * @returns {*}
 */
export const getFireworksStyles = (isTop, isRight) => {
  const styles = {};
  // Position Top & Bottom
  if (isTop) styles.top = getSize(-SHAPE__SIZE.DEFAULT / 1.25);
  else styles.bottom = getSize(-SHAPE__SIZE.DEFAULT / 2.5);
  // Position Right & Left
  if (isRight) styles.right = getSize(-SHAPE__SIZE.DEFAULT / 0.85);
  else styles.left = getSize(-SHAPE__SIZE.DEFAULT / 0.85);
  // Size
  styles.width = getSize(SHAPE__SIZE.DEFAULT);
  styles.height = getSize(SHAPE__SIZE.DEFAULT);
  return styles;
};

/**
 * @param {Boolean} isTop
 * @param {Boolean} isRight
 * @returns {[{x:Number, y:Number}]}
 */
export const computeTinyShapeObjects = (isTop, isRight) => {
  const length = Math.floor(Math.random() * 2) + 2;
  const id = new Date().getTime() % 1000;
  return [
    { x: 1, y: 1, key: id },
    { x: 2, y: 2, key: id + 1 },
    { x: 3, y: 3, key: id + 2 }
  ];
};
