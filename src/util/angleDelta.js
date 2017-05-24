'use strict';

//------------------------------------------------------------------------------
/**
 * Calculate difference between 2 angles
 * @param {number} alpha - First angle
 * @param {number} beta - Second angle
 * @returns {number}
 */
function angleDelta(alpha, beta) {
  return Math.abs(alpha - beta);
}

module.exports = angleDelta;