'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `usemin.js`');
  }

  return {
    html: [data.distPath + '/**/*.html'],
    css: [data.distPath + '/styles/**/*.css'],
    js: data.distPath + '/scripts/*.js',
    options: {
      assetsDirs: [
        data.distPath,
        data.distPath + '/images',
        data.distPath + '/styles'
      ],
      patterns: {
        js: [[/(images\/[^''""]*\.(png|jpg|jpeg|gif|webp|svg))/g, 'Replacing references to images']]
      }
    }
  };
};
