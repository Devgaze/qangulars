module.exports = function (grunt) {

  'use strict';
  var path = require('path');
  var rootPath = process.cwd();
  var bowerAppPath = require('./bower.json').appPath || 'app';

  var options  = {
    init: true,
    configPath: path.join(rootPath, 'grunt'),
    jitGrunt:  {
      staticMappings: {
        useminPrepare: 'grunt-usemin',
        cdnify: 'grunt-google-cdn'//,
        // protractor:'grunt-protractor-runner'
      }
    },
    data: {
      rootPath: rootPath,
      appPath: bowerAppPath,
      distPath: 'dist',
      appConfigPath: path.join(rootPath, '/config'),
      specFileLocation: rootPath + '/app/scripts/**/*.spec.js',
      modRewrite  : require('connect-modrewrite')//,
      // e2eConfigFileLocation: rootPath + '/protractor.config.js',
    }
  };

  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, options);

};
