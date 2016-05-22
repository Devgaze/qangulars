'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) 
    console.log('Loading `jshint.js`');

  return {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: {
      src: [
        'Gruntfile.js',
        data.appPath + '/scripts/**/*.js'
      ]
    },
    test: {
      options: {
        jshintrc: data.appConfigPath + '/.jshintrc'
      },
      src: [data.appPath + '/scripts/**/*.spec.js']
    }
  };
};