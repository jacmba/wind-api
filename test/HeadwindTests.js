'use strict';

let Headwind = require('../src/hwind/hwind');
let assert = require('assert');

let headwind;

describe('Crosswind tests', () => {
  before(() => {
    headwind = new Headwind();
  });

  //----------------------------------------------------------------------------
  it('crosswind should not be an object', () => {
    assert.notEqual(headwind, null);
  });

  //----------------------------------------------------------------------------
  it('Rwy hdg 60º and wind 100º@8kt should give headwind 6.13kt', () => {
    let wind = headwind.calculate(60, 100, 8);
    assert.equal(wind.speed, 6.13);
    assert.equal(wind.heading, 40);
  });
});