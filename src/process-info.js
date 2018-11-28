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

const argObject = {
  package: _package
};

/**
 * Gets and provides both the command line arguments,
 * and the package.json
 */

const processInfo = () => {

  //The first 2 objects in the array are the env, and script...we don't need those
  let args = process.argv.splice(2);

  // argument names must begin with two dashes: --[name]
  // BUT
  // the values can be assigned
  // --[name]=[value]
  // or
  // --[name] [value]

  const reducedArgs = args.reduce((accumulator, currentValue) => {

    if (currentValue.match(/^--/)) {

      let value = currentValue.match('=') ? currentValue.split('=')[1] : true;
      argObject[currentValue.replace(/^--/, '')] = value;
      // We only need to save the keys
      accumulator.push(currentValue);

    } else {

      const lastIndex = accumulator.length - 1;
      const lastKey = accumulator[lastIndex];
      argObject[lastKey] = currentValue;

    }
    return accumulator;

  }, []);

  return argObject;

}

module.exports = processInfo();
