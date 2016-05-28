'use strict';

module.exports = function (grunt, data) { 
  return {
    dist : {
      src: ['app/scripts/**/*.js', 'README.md'],
      options: {
        destination: 'doc',
        template :   'node_modules/ink-docstrap/template',
        configure:   'node_modules/ink-docstrap/template/jsdoc.conf.json',
      }
    }
  };
};