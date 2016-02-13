(function (app) {
  'use strict';

  app.registerModule('anlyts');
  app.registerModule('anlyts.services');
  app.registerModule('anlyts.routes', ['ui.router', 'anlyts.services']);
})(ApplicationConfiguration);
