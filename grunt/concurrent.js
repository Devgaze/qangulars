'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `concurrent.js`');
  }

  return {
    server: ['sass:dist'],
    test: ['sass:dist'],
    dist: [
      'sass:dist',
      'imagemin',
      'svgmin'
    ]
  };

};
