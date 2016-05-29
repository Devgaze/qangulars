/**
 *  @module app
 *  @description
 *  It loads 3 main modules:
 *    - app.core        (Angular modules and internal services)
 *    - app.shared      (Shared application components)
 *    - app.components  (Individiual application components)
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('app', [

      // core module
      'app.core',

      // shared modules
      'app.shared',

      // application modules
      'app.components',

    ]);

})(window.projectName = window.projectName || {}, angular);
