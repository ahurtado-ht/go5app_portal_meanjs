(function () {
  'use strict';

  angular
    .module('anlyts')
    .controller('ArticlesListController', ArticlesListController);

  ArticlesListController.$inject = ['ArticlesService'];

  function ArticlesListController(ArticlesService) {
    var vm = this;

    vm.anlyts = ArticlesService.query();
  }
})();
