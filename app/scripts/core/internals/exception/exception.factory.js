(function (projectName, angular) {

  'use strict';

  angular
    .module('internals.exception')
    .factory('exception', exception);

  exception.$inject = ['logger'];
  /**
   *  @function exception
   *  @param {object} logger
   *  @memberof exception
   *  @see module:exception
   *  @see module:internals
   *  @see module:core
   *  @see module:app
   *  @description
   *  exposes an interface to catch and gracefully handle exceptions.
   *
   *  `[Style Y111]`
   *  Why?: Provides a consistent way to catch exceptions that may be thrown in your code
   *  (e.g. during XHR calls or promise failures).
   *
   *  Note: The exception catcher is good for catching and reacting to specific exceptions
   *  from calls that you know may throw one. For example, when making an XHR call to retrieve
   *  data from a remote web service and you want to catch any exceptions from that service and
   *  react uniquely.
   */
  function exception(logger) {

    var service = {
      catcher: catcher,
    };
    return service;

    function catcher(message) {
      return function (reason) {
        logger.error(message, reason);
      };
    }

  }

})(window.projectName = window.projectName || {}, angular);
