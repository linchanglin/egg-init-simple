'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  app.resources('users', '/api/users', controller.users)
  app.resources('wishs', '/api/wishs', controller.wishs)
  // router.get('/users', controller.user.index);
};