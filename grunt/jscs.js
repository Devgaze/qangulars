'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) 
    console.log('Loading `jscs.js`');

  return {
    options: {
      jshintrc: '.jscsrc',
      verbose: true
    },
    all: {
      src: [
        'Gruntfile.js',
        data.appPath + '/scripts/**/*.js'
      ]
    },
    test: {
      src: [data.appPath + '/scripts/**/*.spec.js']
    }
  };
};