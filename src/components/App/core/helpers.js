// ======================================================
// ======================================================
// Components / App / Core / Helpers
// ======================================================

// Constants
import { COLORS } from "./constants";

/**
 * @returns {String}
 */
export const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
