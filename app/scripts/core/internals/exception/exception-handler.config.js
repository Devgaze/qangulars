(function (projectName, angular, undefined) {

  'use strict';

  angular
    .module('internals.exception')
    .config(exceptionConfig);

  exceptionConfig.$inject = ['$provide'];

  function exceptionConfig($provide) {
    $provide.decorator('$exceptionHandler', extendExceptionHandler);
  }

  extendExceptionHandler.$inject = ['$delegate', 'logger'];
  function extendExceptionHandler($delegate, logger) {
    return function (exception, cause) {

      $delegate(exception, cause);
      var errorData = {
        exception: exception,
        cause: cause,
      };
      /**
       * Could add the error to a service's collection,
       * add errors to $rootScope, log errors to remote web server,
       * or log locally. Or throw hard. It is entirely up to you.
       * throw exception;
       */
      logger.error(exception.msg, errorData);
    };
  }

})(window.projectName = window.projectName || {}, angular);
