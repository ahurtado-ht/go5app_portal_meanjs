(function () {
  'use strict';

  angular
    .module('anlyts')
    .controller('AnlytsAccess12Controller', AnlytsAccess12Controller);

  AnlytsAccess12Controller.$inject = ['ArticlesService'];

  function AnlytsAccess12Controller(ArticlesService) {
    var vm = this;
    vm.anlyts = ArticlesService.query();
    vm.server = "http://192.168.0.12:8080/saiku";
    vm.path   = "/rest/saiku/embed";
    vm.user   = "admin";
    vm.pass   = "admin";
    vm.report_path = "/ROOT/MIS_PESOS/Q002_BonosRedimidos.saiku";


    var myClient = new SaikuClient({
      server: vm.server,
      path: vm.path,
      user: vm.user,
      password: vm.pass,
      blockUI: false
    });

    myClient.execute({
  		file: vm.report_path,
      fileType: "saiku",
  		htmlObject: "#saiku",
  		render: "table",
  		params: {
  			family: "testparameter",
        xhrFields: {
          withCredentials: true
        }
  		}
  	});

  }
})();
