'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `sass.js`');
  }
  console.warn('running sass');
  return {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        '<%= rootPath %>/.tmp/styles/main.css': data.appPath + '/styles/main.scss'
      }
    }
  };
};
