/**
 * @license
 * Copyright Robin Buckley. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file
 */
'use strict';
const ROOT_DIR = process.cwd();
const _package = require(ROOT_DIR + '/package.json');

/**
 * Gets and provides both the command line arguments,
 * and the package.json
 */

class ProcessInfo {
  constructor () {
    this.package = _package;
    this.getArgs();
  }

  getArgs () {
    //The first 2 objects in the array are the env, and script...we don't need those
    let args = process.argv.splice(2);

    //major, minor, buildNumber
    args.forEach((obj) => {
      let keyVal = obj.split('=');
      let key = keyVal[0].replace('--', '');
      let val = keyVal[1];
      this[key] = val;
    });
  }
}

module.exports = new ProcessInfo();
