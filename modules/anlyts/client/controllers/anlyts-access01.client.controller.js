(function () {
  'use strict';

  angular
    .module('anlyts')
    .controller('AnlytsAccess01Controller', AnlytsAccess01Controller);

  AnlytsAccess01Controller.$inject = ['ArticlesService'];

  function AnlytsAccess01Controller(ArticlesService) {
    var vm = this;
    vm.anlyts = ArticlesService.query();

    var myClient = new SaikuClient({
      server: "http://192.168.0.12:8080/saiku",
      path: "/rest/saiku/embed",
      user: "admin",
      password: "admin"
    });

    myClient.execute({
  		file: "/ROOT/MIS_PESOS/Q002_BonosRedimidos.saiku",
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
