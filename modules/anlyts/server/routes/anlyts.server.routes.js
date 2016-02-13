'use strict';

/**
 * Module dependencies
 */
var anlytsPolicy = require('../policies/anlyts.server.policy'),
  anlyts = require('../controllers/anlyts.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/anlyts').all(anlytsPolicy.isAllowed)
    .get(anlyts.list)
    .post(anlyts.create);

  // Single article routes
  app.route('/api/anlyts/:articleId').all(anlytsPolicy.isAllowed)
    .get(anlyts.read)
    .put(anlyts.update)
    .delete(anlyts.delete);

  // Finish by binding the article middleware
  app.param('articleId', anlyts.articleByID);
};
