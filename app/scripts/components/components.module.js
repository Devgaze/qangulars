/**
 *  @module components
 *  @memberof app
 *  @see module:app
 *  @description
 *  It exposes application component
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components', [
      'app.components.welcome',
    ]);

})(window.projectName = window.projectName || {}, angular);
