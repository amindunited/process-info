/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';

const fs = require('fs');
const processInfo = require('./index');
const expect = require('chai').expect

describe('Process Info', () => {

  it('should export an function', () => {
    expect(processInfo).to.be.a('function');
  });

  it('should get the correct package name', () => {
    expect(processInfo().package.name).to.equal('@amindunited/process-info');
  });

});
