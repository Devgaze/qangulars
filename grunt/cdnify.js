'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `cdnify.js`');
  }

  return {
    dist: {
      html: [data.distPath + '/*.html']
    }
  };
};
