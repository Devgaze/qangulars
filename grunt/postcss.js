'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `postcss.js`');
  }

  return {
    options: {
      processors: [
        require('autoprefixer')({browsers: ['last 1 version']})
      ]
    },
    server: {
      options: {
        map: true
      },
      files: [{
        expand: true,
        cwd: data.rootPath + '/.tmp/styles/',
        src: '{,*/}*.css',
        dest: data.rootPath + '/.tmp/styles/'
      }]
    },
    dist: {
      files: [{
        expand: true,
        cwd: data.rootPath + '/.tmp/styles/',
        src: '{,*/}*.css',
        dest: data.rootPath + '/.tmp/styles/'
      }]
    }
  };
};
