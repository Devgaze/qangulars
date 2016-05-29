/**
 *  @memberof spinner
 *  @see module:spinner
 *  @see module:shared
 *  @see module:app
 *  @description
 *  Implements `Spinner` directive
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('app.shared.spinner')
    .directive('spinner', Spinner);

  Spinner.$inject = [];
  function Spinner() {

    // implementation

  }

})(window.projectName = window.projectName || {}, angular);
