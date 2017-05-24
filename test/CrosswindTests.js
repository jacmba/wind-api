'use strict';

let Crosswind = require('../src/xwind/xwind');
let assert = require('assert');

let crosswind;

describe('Crosswind tests', () => {
  before(() => {
    crosswind = new Crosswind();
  });

  //----------------------------------------------------------------------------
  it('crosswind should not be an object', () => {
    assert.notEqual(crosswind, null);
  });

  //----------------------------------------------------------------------------
  it('Rwy hdg 60º and wind 100º@8kt should give crosswind 5.14kt', () => {
    let wind = crosswind.calculate(60, 100, 8);
    assert.equal(wind.speed, 5.14);
    assert.equal(wind.heading, 40);
  });
});