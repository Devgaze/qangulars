/**
 *  @module router
 *  @memberof internals
 *  @see module:internals
 *  @see module:core
 *  @see module:app
 *  @description
 *  Allows automatic generation of routes, defined in individual modules.
 *
 *  `[Style Y271]`
 *  Define routes for views in the module where they exist. Each module should contain the routes
 *  for the views in the module.
 *
 *  Why?: Each module should be able to stand on its own.
 *  Why?: When removing a module or adding a module, the app will only contain routes that point
 *  to existing views.
 *  Why?: This makes it easy to enable or disable portions of an application without concern over
 *  orphaned routes.
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('internals.router', []);

})(window.projectName = window.projectName || {}, angular);
