'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `svgmin.js`');
  }

  return {
    dist: {
      files: [{
        expand: true,
        cwd: data.appPath + '/images',
        src: '{,*/}*.svg',
        dest: data.distPath + '/images'
      }]
    }
  };
};
