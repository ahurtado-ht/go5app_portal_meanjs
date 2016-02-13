(function () {
  'use strict';

  angular
    .module('anlyts.services')
    .factory('ArticlesService', ArticlesService);

  ArticlesService.$inject = ['$resource'];

  function ArticlesService($resource) {
    return $resource('api/anlyts/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();
