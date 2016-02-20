(function () {
  'use strict';

  angular
    .module('anlyts')
    .controller('AnlytsAccess11Controller', AnlytsAccess11Controller);

  AnlytsAccess11Controller.$inject = ['ArticlesService'];

  function AnlytsAccess11Controller(ArticlesService) {
    var vm = this;
    vm.anlyts = ArticlesService.query();
    vm.server = "http://192.168.0.12:8080/saiku";
    vm.path   = "/rest/saiku/embed";
    vm.user   = "admin";
    vm.pass   = "admin";
    vm.report_path = "/ROOT/MIS_PESOS/Q001b_TransaccionesBonos.saiku";


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
