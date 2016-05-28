'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `useminPrepare.js`');
  }

  return {
    html: data.appPath + '/index.html',
    options: {
      dest: data.distPath,
      flow: {
        html: {
          steps: {
            js: ['concat', 'uglifyjs'],
            css: ['cssmin']
          },
          post: {}
        }
      }
    }
  };
};
