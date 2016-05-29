/**
 *  @description
 *  All application wide constants should be defined here.
 */
(function (project, angular) {

  'use strict';

  angular
    .module('app.core')

    /**
     * @constant {object} moment
     * @alias app.core.constants.moment
     * @desc 3rd-party library for datetime manipulation
     */
    .constant('moment', {});

})(window.project = window.project || {}, angular);
