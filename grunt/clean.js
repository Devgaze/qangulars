'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `clean.js`');
  }

  return {
    dist: {
      files: [{
        dot: true,
        src: [
          data.rootPath + '/.tmp',
          data.distPath + '/{,*/}*',
          '!' + data.distPath + '/.git{,*/}*'
        ]
      }]
    },
    server: data.rootPath + '/.tmp'
  };
};
