/**
 *  @module shared
 *  @memberof app
 *  @see module:app
 *  @description
 *  Holds all shared components in application
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.shared', [
      'app.shared.spinner',
    ]);

})(window.projectName = window.projectName || {}, angular);
