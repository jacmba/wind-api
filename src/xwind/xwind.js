'use strict';

const RADIANS = 0.0174533;

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
    let alpha = Math.abs(rwyHdg - windHdg) * RADIANS;
    let speed = windSpd * Math.sin(alpha);

    return {
      speed: speed.toFixed(2),
      heading: alpha
    };
  }
}

module.exports = Crosswind;