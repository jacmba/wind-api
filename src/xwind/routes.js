'use strict';

let Model = require('./xwind');

/**
 * @class Cross wind controller
 */
class CrosswindRoutes {
  //----------------------------------------------------------------------------
  /**
   * @constructor
   */
  constructor() {
    this._model = new Model();
  }

  //----------------------------------------------------------------------------
  /**
   * Calculate cross wind, get response in JSON format
   * @param {object} req - Client request
   * @param {object} req.query - HTTP query string
   * @param {number} req.query.rwy_hdg - Runway heading
   * @param {number} req.query.wind_hdg - Wind speed
   * @param {number} req.query.wind_spd - Wind speed
   * @param {object} res - Server response
   */
  getXwind(req, res) {
    let rwyHdg, windHdg, windSpd;

    console.log(`Requested cross wind from ${req.ip}`);

    try {
      rwyHdg = Number(req.query.rwy_hdg);
      windHdg = Number(req.query.wind_hdg);
      windSpd = Number(req.query.wind_spd);
    } catch (e) {
      console.error(e);
      return res.status(400).json(e);
    }

    let result = this._model.calculate(rwyHdg, windHdg, windSpd);
    console.log(`Returning ${JSON.stringify(result)}`);
    return res.json(result);
  }
}

module.exports = CrosswindRoutes;