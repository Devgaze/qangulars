'use strict';
//var modRewrite = require('connect-modrewrite');

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) 
    console.log('Loading `connect.js`');

  return {
    options: {
      port: 9000,
      // Change this to '0.0.0.0' to access the server from outside.
      hostname: 'localhost',
      debug: false,
      livereload: 35729
    },
    livereload: {
      options: {
        open: true,
        middleware: function (connect) {
          return [
            data.modRewrite([
              '!\\.ttf|\\.woff|\\.ttf|\\.eot|\\.html|\\.js|\\.coffee|\\.css|\\.png|\\.jpg|\\.gif|\\.svg|\\.webm$ /index.html [L]'
            ]),
            connect.static(data.rootPath + '/.tmp'),
            connect().use(
              '/bower_components',
              connect.static(data.rootPath + '/bower_components')
            ),
            connect().use(
              '/app/styles',
              connect.static('./app/styles')
            ),
            connect.static(data.appPath + '')
          ];
        }
      }
    },
    test: {
      options: {
        port: 9001,
        middleware: function (connect) {
          return [
            connect.static('/.tmp'),
            connect.static('test'),
            connect().use(
              '/bower_components',
              connect.static('./bower_components')
            ),
            connect.static(data.appPath)
          ];
        }
      }
    },
    dist: {
      options: {
        open: true,
        middleware: function (connect) {
          return [
            modRewrite([
              '!\\.ttf|\\.woff|\\.ttf|\\.eot|\\.html|\\.js|\\.coffee|\\.css|\\.png|\\.jpg|\\.gif|\\.svg|\\.webm$ /index.html [L]'
            ]),
            connect.static(data.distPath)
          ];
        }
      }
    }
  };
};