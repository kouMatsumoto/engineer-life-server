import * as Router from 'koa-router';
import { apiV1Router } from "./api-v1/index";

const rootRouter = new Router();

rootRouter.use('/api', apiV1Router.routes());


export {
  rootRouter
};
