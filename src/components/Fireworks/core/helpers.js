// ======================================================
// Components / Fireworks / Core / Helpers
// ======================================================

// Constants
import { SHAPE__SIZE } from "../../Shape/core/constants";
import {
  FIREWORKS__TINY_FIREWORK__TRAIL,
  FIREWORKS__TINY_FIREWORK__MIN_SPREAD_ANGLE,
  FIREWORKS__TINY_FIREWORK__MAX_SPREAD_ANGLE,
  FIREWORKS__TINY_FIREWORK__RADIUS,
  FIREWORKS__SIZE
} from "./constants";

// Helpers
import { getSize, degreesToRadians, randomBetween } from "../../../helpers";

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
 * @param {Boolean} isRight
 * @param {Boolean} isTop
 * @param {Boolean} reset
 * @returns {[{x:Number, y:Number, show:Boolean, key:Number}]}
 */
export const computeTinyShapeObjects = (isRight, isTop, reset = false) => {
  const length = Math.floor(Math.random() * 2) + 3;
  const objs = [0, 0, 0, 0].map((_, i) => ({
    show: false,
    delay: 0,
    key: i,
    x: 0,
    y: 0
  }));

  // Update visibility and position
  if (!reset) {
    const sa = randomBetween(FIREWORKS__TINY_FIREWORK__MIN_SPREAD_ANGLE, FIREWORKS__TINY_FIREWORK__MAX_SPREAD_ANGLE);
    const offset = FIREWORKS__SIZE.DEFAULT / 2;
    const r = FIREWORKS__TINY_FIREWORK__RADIUS;
    const start = (sa - 90) / -2;
    const angle = sa / (length - 1);
    for (let i = 0, x = null, y = null, rads = null; i < length; i += 1) {
      rads = degreesToRadians(angle * i + start);
      objs[i].show = true;
      objs[i].delay = FIREWORKS__TINY_FIREWORK__TRAIL * i;
      objs[i].x = (isRight ? 1 : -1) * (r * Math.sin(rads) + offset);
      objs[i].y = (isTop ? -1 : 1) * (r * Math.cos(rads) + offset);
    }
  }

  return objs;
};
