(function (projectName, angular) {

  'use strict';

  angular
    .module('internals.router')
    .provider('routerHelper', routerHelperProvider);

  routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
  /**
   *  @function routerHelperProvider
   *  @memberof router
   *  @see module:router
   *  @see module:internals
   *  @see module:core
   *  @see module:app
   *  @description
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
  function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    /* jshint validthis:true */
    this.$get = RouterHelper;

    $locationProvider.html5Mode(true);

    RouterHelper.$inject = ['$state'];
    function RouterHelper($state) {

      var hasOtherwise = false;

      var service = {
        configureStates: configureStates,
        getStates: getStates,
      };

      return service;

      function configureStates(states, otherwisePath) {
        states.forEach(function (state) {
          $stateProvider.state(state.state, state.config);
        });

        if (otherwisePath && !hasOtherwise) {
          hasOtherwise = true;
          $urlRouterProvider.otherwise(otherwisePath);
        }
      }

      function getStates() { return $state.get(); }
    }
  }
})(window.projectName = window.projectName || {}, angular);
