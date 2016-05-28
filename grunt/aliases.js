'use strict';

console.log('Loading `aliases.js`');

var serveTasks = [
  'clean:server',
  // 'html2js:main',
  'jshint',
  'wiredep',
  'concurrent:server',
  'postcss:server',
  'connect:livereload',
  'watch'
];

var testTasks = [
  'clean:server',
  'wiredep',
  'concurrent:test',
  'postcss',
  'connect:test',
  'karma'
];

// var e2eTasks = [
//   'protractor_webdriver:local',
//   'protractor:singlerun'
// ];

var buildTasks = [
  'clean:dist',
  // 'html2js:main',
  'wiredep',
  'useminPrepare',
  'concurrent:dist',
  'postcss',
  'concat',
  'ngAnnotate',
  'copy:dist',
  'cdnify',
  'cssmin',
  'uglify',
  'filerev',
  'usemin',
  'htmlmin'
];

var defaultTasks = [
  'newer:jshint',
  'newer:jscs',
  'test',
  'build'
];

module.exports = {

  /* serve */
  'serve': {
    description: '',
    tasks: serveTasks
  },

  /* test */
  'test': {
    description: '',
    tasks: testTasks
  },

  // 'e2e': {
  //   description: '',
  //   tasks: e2eTasks
  // },

  /* build */
  'build': {
    description: '',
    tasks: buildTasks
  },

  /* build */
  'default': {
    description: '',
    tasks: defaultTasks
  }

};

