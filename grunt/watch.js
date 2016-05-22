'use strict';

module.exports = function (grunt, data) {

  if (grunt.cli.options.debug) 
    console.log('Loading `watch.js`');

  return {
    // html2js: {
    //   files: [
    //     data.appPath + '/scripts/**/*.html',
    //     data.appPath + '/views/**/*.html'
    //   ],
    //   tasks: ['newer:html2js:main']
    // },
    bower: {
      files: [data.rootPath + '/bower.json'],
      tasks: ['wiredep']
    },
    js: {
      files: [
        data.appPath + '/scripts/**/*.js', 
        '!' + data.appPath + '/scripts/**/*.spec.js',
        '!' + data.appPath + '/scripts/**/*.e2e.js'
      ],
      tasks: ['newer:jshint:all', 'newer:jscs:all'],
      options: {
        livereload: '<%= connect.options.livereload %>'
      }
    },
    jsTest: {
      files: [data.appPath + '/scripts/**/*.spec.js', data.appConfigPath + '/karma.conf.js' ],
      tasks: ['newer:jshint:test', 'newer:jscs:test', 'karma']
    },
    compass: {
      files: [data.appPath + '/styles/{,*/}*.{scss,sass}'],
      tasks: ['compass:server', 'postcss:server']
    },
    // sass: {
    //   files: [data.appPath + '/**/*.{scss,sass}'],
    //   tasks: ['sass:dist'/*, 'autoprefixer'*/]
    // },
    gruntfile: {
      files: [data.rootPath + '/Gruntfile.js', data.rootPath + '/grunt/*.js']
    },
    livereload: {
      options: {
        livereload: '<%= connect.options.livereload %>'
      },
      files: [
        data.appPath + '/index.html',
        data.rootPath + '/.tmp/styles/{,*/}*.css',
        data.appPath + '/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
      ]
    }
  };
};