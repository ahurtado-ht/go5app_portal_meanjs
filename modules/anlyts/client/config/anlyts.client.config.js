(function () {
  'use strict';

  angular
    .module('anlyts')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Analytics',
      state: 'anlyts',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'anlyts', {
      title: 'Analytics Access 01 [embed]',
      state: 'anlyts.access01'
    });


    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'anlyts', {
      title: 'Analytics Access 03 [iframe]',
      state: 'anlyts.access03'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'anlyts', {
      title: 'Analytics Access 11 [embed] - Q001b',
      state: 'anlyts.access11'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'anlyts', {
      title: 'Analytics Access 12 [embed] - Q002',
      state: 'anlyts.access12'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'anlyts', {
      title: 'Analytics Access 13 [geo] - Q003',
      state: 'anlyts.access02'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'anlyts', {
      title: 'Analytics Access 14 [embed] - Q004',
      state: 'anlyts.access14'
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'anlyts', {
      title: 'List Articles',
      state: 'anlyts.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'anlyts', {
      title: 'Create Article',
      state: 'anlyts.create',
      roles: ['user']
    });
  }
})();
