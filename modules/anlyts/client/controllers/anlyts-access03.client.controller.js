(function () {
  'use strict';

  angular
    .module('anlyts')
    .controller('AnlytsAccess03Controller', AnlytsAccess03Controller);

  AnlytsAccess03Controller.$inject = ['$sce','ArticlesService'];

  function AnlytsAccess03Controller($sce,ArticlesService) {
    var vm = this;

    vm.saiku_server ='http://192.168.0.12:8080';
    vm.saiku_report='/ROOT/MIS_PESOS/Q002_BonosRedimidos.saiku';
    vm.param_completeurl= vm.saiku_server + '/?plugin=true&mode=view#query/open/' + vm.saiku_report;

    vm.param_trustedcompleteurl = $sce.trustAsResourceUrl(vm.param_completeurl);
    // http://192.168.0.12:8080/?plugin=true&mode=view#query/open//ROOT/MIS_PESOS/Q002_BonosRedimidos.saiku

    vm.anlyts = ArticlesService.query();
  }
})();
