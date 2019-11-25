// ======================================================
// Components / Shape / Core / Helpers
// ======================================================

// Icons
import HeartIcon from "react-ionicons/lib/MdHeartOutline";
import StarIcon from "react-ionicons/lib/MdStarOutline";
import SmileyIcon from "react-ionicons/lib/IosHappyOutline";

// Constants
import { SHAPE__TYPE } from "./constants";

/**
 * @returns {String}
 */
export const getRandomShape = () => {
  const keys = Object.keys(SHAPE__TYPE);
  return SHAPE__TYPE[keys[Math.floor(Math.random() * keys.length)]];
};

/**
 * @param {String} shape Attribute of the [SHAPE__TYPE] object.
 * @returns {ReactComponent} Provides the [ReactComponent] matching the [shape] argument.
 */
export const getIcon = shape => {
  switch (shape) {
    case SHAPE__TYPE.HEART:
      return HeartIcon;
    case SHAPE__TYPE.STAR:
      return StarIcon;
    default:
      return SmileyIcon;
  }
};
