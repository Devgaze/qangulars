'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) {
    console.log('Loading `htmlmin.js`');
  }

  return {
    dist: {
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        collapseBooleanAttributes: true,
        removeCommentsFromCDATA: true,
        removeOptionalTags: true
      },
      files: [{
        expand: true,
        cwd: data.distPath,
        src: ['*.html', '**/*.html'],
        dest: data.distPath
      }]
    }
  };
};
