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
 *
 * @todo: need to handle error when failed to create data.
 */
apiV1Router.post('/records/', async (ctx) => {
  const record = await Record.createOne(ctx.request.body);
  ctx.body = makeApiResult(record, 'A new record is created.');
});

/**
 * return a specific record by id.
 */
apiV1Router.get('/records/:id', async (ctx) => {
  try {
    const searchTargetId = ctx.params['id'];
    const record = await Record.fetchOneById(searchTargetId);
    ctx.body = makeApiResult(record, 'A record is found.');

  } catch (e) {
    // when errors will be thrown
    //   - {MongooseError}: when invalid id (failed to cast to ObjectId).
    ctx.throw(e);
  }
});


export {
  apiV1Router
};
