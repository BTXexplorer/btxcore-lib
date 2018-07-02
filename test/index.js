'use strict';

var should = require('chai').should();
var btxcore = require('../');

describe('#versionGuard', function() {
  it('global._btxcore should be defined', function() {
    should.equal(global._btxcore, btxcore.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      btxcore.versionGuard('version');
    }).should.throw('More than one instance of btxcore');
  });
});
