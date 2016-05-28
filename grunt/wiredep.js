'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `wiredep.js`');
  }

  return {
    app: {
      src: [data.appPath + '/index.html'],
      ignorePath:  /\.\.\//
    },
    test: {
      devDependencies: true,
      src: '<%= karma.unit.configFile %>',
      ignorePath:  /\.\.\//,
      fileTypes:{
        js: {
          block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
          detect: {
            js: /'(.*\.js)'/gi
          },
          replace: {
            js: '\'{{filePath}}\','
          }
        }
      }
    },
    sass: {
      src: [data.appPath + '/styles/{,*/}*.{scss,sass}'],
      ignorePath: data.rootPath + '/bower_components/'
    }
  };
};
