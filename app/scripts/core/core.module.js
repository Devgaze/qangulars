/**
 *  @module core
 *  @memberof app
 *  @see module:app
 *  @description
 *  It loads core application modules
 *    - Angular modules
 *    - Third-party modules (ui.router, ui.bootstrap, etc.)
 *    - `internals` module
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.core', [

      // Angular modules
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',

      // 3rd party
      'ui.router',

      // internal functions (exception logger)
      'internals',

    ]);

})(window.projectName = window.projectName || {}, angular);
