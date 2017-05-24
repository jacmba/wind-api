'use strict';

let angleDelta = require('../util/angleDelta');
let constants = require('../util/constants');

/**
 * @class Cross wind calculations
 */
class Crosswind {
  //----------------------------------------------------------------------------
  /** 
   * Calculate cross wind component
   * @param {number} rwyHdg - Runway heading
   * @param {number} windHdg - Wind heading
   * @param {number} windSpeed - wind speed
   * 
  */
  calculate(rwyHdg, windHdg, windSpd) {
    let alpha = angleDelta(rwyHdg, windHdg);
    let speed = windSpd * Math.sin(alpha * constants.RADIANS);

    return {
      speed: speed.toFixed(2),
      heading: alpha
    };
  }
}

module.exports = Crosswind;