// ======================================================
// Global Helpers
// ======================================================

/**
 * @param {Number} unit
 * @returns {String} Provides
 */
export const getSize = unit => `${unit}em`;

/**
 * @param {Number} degrees
 */
export const degreesToRadians = degrees => degrees * (Math.PI / 180);

/**
 *
 * @param {Number} a
 * @param {Number} b
 */
export const randomBetween = (a, b) => Math.floor(Math.random() * a) + b;
