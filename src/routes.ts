/**
 * Main application routes
 */
import { Application } from 'express';

import healthcheck from './modules/healthcheck';
import user from './modules/user';
import authLocal from './modules/auth/local';
import html_engine from './modules/htmlengine';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheck);
  app.use('/api/users', user);
  app.use('/api/beautyhtml', html_engine);

  app.use('/auth/local', authLocal);
}

export default routes;
