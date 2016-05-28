'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `karma.js`');
  }

  return {
    unit: {
      configFile: data.appConfigPath + '/karma.conf.js',
      singleRun: false
    }
  };
};
