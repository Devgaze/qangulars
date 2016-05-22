'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) 
    console.log('Loading `ngAnnotate.js`');

  return {
    dist: {
      files: [{
        expand: true,
        cwd: data.rootPath + '/.tmp/concat/scripts',
        src: ['*.js'],
        dest: data.rootPath + '/.tmp/concat/scripts'
      }]
    }
  };
};