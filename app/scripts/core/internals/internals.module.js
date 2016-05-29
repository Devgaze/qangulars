/**
 *  @module internals
 *  @memberof core
 *  @property {module:logger} logger
 *  @property {module:exception} exception
 *  @property {module:router} router
 *  @see module:core
 *  @see module:app
 *  @description
 *  Project independent module.
 *  Contains helper modules for catching exceptions, logging and automatic route/state loading
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('internals', [
      'internals.logger',
      'internals.exception',
      'internals.router',
    ]);

})(window.projectName = window.projectName || {}, angular);
