'use strict';

module.exports = function (grunt, data) {
  
  if (grunt.cli.options.debug) 
    console.log('Loading `compass.js`');
  
  return {
    options: {
      sassDir: data.appPath + '/styles',
      cssDir:  data.rootPath + '/.tmp/styles',
      generatedImagesDir: data.rootPath + '/.tmp/images/generated',
      imagesDir: data.appPath + '/images',
      javascriptsDir: data.appPath + '/scripts',
      fontsDir: data.appPath + '/styles/fonts',
      importPath: data.rootPath + '/bower_components',
      httpImagesPath: data.appPath + '/images',
      httpGeneratedImagesPath: data.appPath + '/images/generated',
      httpFontsPath: data.appPath + '/styles/fonts',
      relativeAssets: false,
      assetCacheBuster: false,
      raw: 'Sass::Script::Number.precision = 10\n'
    },
    dist: {
      options: {
        generatedImagesDir: data.distPath + '/images/generated'
      }
    },
    server: {
      options: {
        sourcemap: true
      }
    }
  };
};