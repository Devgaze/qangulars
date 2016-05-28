'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `imagemin.js`');
  }

  return {
    dist: {
      files: [{
        expand: true,
        cwd: data.appPath + '/images',
        src: '{,*/}*.{png,jpg,jpeg,gif}',
        dest: data.distPath + '/images'
      }]
    }
  };
};
