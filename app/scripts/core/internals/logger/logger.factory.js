(function (projectName, angular) {

  'use strict';

  angular
    .module('internals.logger')
    .factory('logger', logger);

  logger.$inject = ['$log'];

  /**
   *  @function logger
   *  @param {object} $log
   *  @memberof logger
   *  @see module:logger
   *  @see module:internals
   *  @see module:core
   *  @see module:app
   *  @description
   *  Exposes interface for displaying error, info, success and warning messages
   */
  function logger($log) {

    var service = {

      error: error,
      info: info,
      success: success,
      warning: warning,
      log: $log.log,

    };

    return service;

    /**
     *  @function error
     *  @param {string} message
     *  @param {object} data
     *  @desc Logs error message with accompanying object in the console
     */
    function error(message, data) {
      $log.error('Error: ' + message, data);
    }

    /**
     *  @function info
     *  @param {string} message
     *  @param {object} data
     *  @desc Logs info message with accompanying object in the console
     */
    function info(message, data) {
      $log.info('Info: ' + message, data);
    }

    /**
     *  @function success
     *  @param {string} message
     *  @param {object} data
     *  @desc Logs success message with accompanying object in the console
     */
    function success(message, data) {
      $log.info('Success: ' + message, data);
    }

    /**
     *  @function warning
     *  @param {string} message
     *  @param {object} data
     *  @desc Logs warning message with accompanying object in the console
     */
    function warning(message, data) {
      $log.warn('Warning: ' + message, data);
    }

  }

})(window.projectName = window.projectName || {}, angular);
