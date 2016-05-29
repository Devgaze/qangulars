/**
 *  @module exception
 *  @memberof internals
 *  @see module:internals
 *  @see module:core
 *  @see module:app
 *  @description
 *  Dependes on module:internals.logger
 *  Provides handlers for catching and reporting all uncaught Angular exceptions..
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('internals.exception', ['internals.logger']);

})(window.projectName = window.projectName || {}, angular);
