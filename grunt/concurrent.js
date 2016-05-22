'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) 
    console.log('Loading `concurrent.js`');

  return {
  	server: [
		'compass:server'
	],
	test: [
		'compass'
	],
	dist: [
		'compass:dist',
		'imagemin',
		'svgmin'
	]
  };
};