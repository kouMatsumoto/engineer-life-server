import * as Router from 'koa-router';
import { Record } from '../../models/record/record.model';
import { makeApiResult } from '../../lib/make-api-result';
import { makeApiErrorResult } from '../../lib/make-api-error-result';

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
    ctx.body = makeApiErrorResult(e);
  }
});


/**
 * return all records array json.
 */
apiV1Router.get('/records/', async (ctx) => {
  const records = await Record.fetchAll();
  ctx.body = makeApiResult(records, 'All records are found.');
});

/**
 * create a new record from posted data, and respond with it.
 */
apiV1Router.post('/records/', async (ctx) => {
  const record = await Record.createOne(ctx.request.body);
  ctx.body = makeApiResult(record, 'A new record is created.');
});


export {
  apiV1Router
};
