import * as Router from 'koa-router';

const apiV1Router = new Router();


/**
 * Error handling for this api router
 * it's better move this error handling to global router
 */
apiV1Router.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    ctx.status = e.status || 500;
    ctx.body = e.message;
  }
});


/**
 * return all information array json.
 */
apiV1Router.get('/', async (ctx) => {
  ctx.body = 'hello api v1';
});


export {
  apiV1Router
};
