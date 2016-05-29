/**
 *  @module logger
 *  @memberof internals
 *  @see module:internals
 *  @see module:core
 *  @see module:app
 *  @description
 *  Provides an easy way of logging information, errors, warnings and success messages.
 */
(function (projectName, angular) {

  'use strict';

  angular
    .module('internals.logger', []);

})(window.projectName = window.projectName || {}, angular);
