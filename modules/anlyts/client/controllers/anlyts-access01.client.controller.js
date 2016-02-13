(function () {
  'use strict';

  angular
    .module('anlyts')
    .controller('AnlytsAccess01Controller', AnlytsAccess01Controller);

  AnlytsAccess01Controller.$inject = ['ArticlesService'];

  function AnlytsAccess01Controller(ArticlesService) {
    var vm = this;

    vm.anlyts = ArticlesService.query();
  }
})();
