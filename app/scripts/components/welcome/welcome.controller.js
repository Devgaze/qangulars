(function (projectName, angular) {

  'use strict';

  angular
    .module('app.components.welcome')
    .controller('WelcomeController', WelcomeController);

  WelcomeController.$inject = ['$interval', 'logger'];
  function WelcomeController($interval, logger) {

    var vm = this;
    var angularSuperlatives;

    logger.info('Loading controller:', vm);

    angularSuperlatives = ['rocks', 'is easy to use', 'has a steep learning curve'];

    vm.nextItem = 0;
    vm.superlative = angularSuperlatives[vm.nextItem];

    $interval(loadNext, 1500);

    function loadNext() {

      vm.nextItem = (vm.nextItem >= angularSuperlatives.length - 1) ? 0 : vm.nextItem + 1;
      vm.superlative = angularSuperlatives[vm.nextItem];

    }

  }

})(window.projectName = window.projectName || {}, angular);
