import * as Router from 'koa-router';
import { Record } from '../../models/record/record.model';

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
 * return all records array json.
 */
apiV1Router.get('/records/', async (ctx) => {
  ctx.body = await Record.fetchAll();
});

/**
 * create a new record
 */
apiV1Router.post('/records/', async (ctx) => {
  ctx.body = await Record.createOne(ctx.request.body);
});


export {
  apiV1Router
};
