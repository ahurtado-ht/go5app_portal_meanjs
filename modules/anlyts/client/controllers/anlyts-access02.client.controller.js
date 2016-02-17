(function () {
  'use strict';

  angular
    .module('anlyts')
    .controller('AnlytsAccess02Controller', AnlytsAccess02Controller);

  AnlytsAccess02Controller.$inject = ['$scope', '$http', 'leafletData','ArticlesService'];

  function AnlytsAccess02Controller($scope, $http, leafletData, ArticlesService) {

    // scaffold defaults
    var vm = this;
    vm.anlyts = ArticlesService.query();


    // interaction with leaflet

    angular.extend($scope, {
      center: {
  			lat: 4.68592950660633,
  			lng: -74.10140991210938,
  			zoom: 7
  		},
  		defaults: {
  			scrollWheelZoom: false
  		}
  	});

  	$http.get("modules/anlyts/client/controllers/data.geojson").success(function(data, status) {
  		addGeoJsonLayerWithClustering(data);
  	});
  	// var geoJsonLayer = null;
  	function addGeoJsonLayerWithClustering(data) {

  		  var markers = L.markerClusterGroup();
  		  //if (geojsonLayer) {
  		  //  markers.clearLayers();
  		  //}

  		  var geoJsonLayer = L.geoJson(data, {
  			  onEachFeature: function (feature, layer) {
  				  layer.bindPopup(feature.properties.name);
  			  }
  		  });
  		  markers.addLayer(geoJsonLayer);
  		  leafletData.getMap().then(function(map) {
  			  map.addLayer(markers);
  			//map.fitBounds(markers.getBounds());
  		  });

  	};


  	/*
  	leafletData.getMap().then(function(map){
  		map.
  	});
  	*/






  }
})();
