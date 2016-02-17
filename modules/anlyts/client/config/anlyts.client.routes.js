(function () {
  'use strict';

  angular
    .module('anlyts.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {

    $stateProvider
      .state('anlyts', {
        abstract: true,
        url: '/anlyts',
        template: '<ui-view/>'
      })
      .state('anlyts.access01', {
        url: '/access01',
        templateUrl: 'modules/anlyts/client/views/page-access01.client.view.html',
        controller: 'AnlytsAccess01Controller',
        controllerAs: 'vm',
      })
      .state('anlyts.access02', {
        url: '/access02',
        templateUrl: 'modules/anlyts/client/views/page-access02.client.view.html',
        controller: 'AnlytsAccess02Controller',
        controllerAs: 'vm'
      })
      .state('anlyts.access03', {
        url: '/access03',
        templateUrl: 'modules/anlyts/client/views/page-access03.client.view.html',
        controller: 'AnlytsAccess03Controller',
        controllerAs: 'vm'
      })
      .state('anlyts.list', {
        url: '',
        templateUrl: 'modules/anlyts/client/views/list-anlyts.client.view.html',
        controller: 'ArticlesListController',
        controllerAs: 'vm'
      })
      .state('anlyts.create', {
        url: '/create',
        templateUrl: 'modules/anlyts/client/views/form-article.client.view.html',
        controller: 'ArticlesController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: newArticle
        },
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('anlyts.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/anlyts/client/views/form-article.client.view.html',
        controller: 'ArticlesController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: getArticle
        },
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('anlyts.view', {
        url: '/:articleId',
        templateUrl: 'modules/anlyts/client/views/view-article.client.view.html',
        controller: 'ArticlesController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: getArticle
        }
      });
  }

  getArticle.$inject = ['$stateParams', 'ArticlesService'];

  function getArticle($stateParams, ArticlesService) {
    return ArticlesService.get({
      articleId: $stateParams.articleId
    }).$promise;
  }

  newArticle.$inject = ['ArticlesService'];

  function newArticle(ArticlesService) {
    return new ArticlesService();
  }
})();
