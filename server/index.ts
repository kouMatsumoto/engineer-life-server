import * as Koa from 'koa';
import * as koaBodyparser from 'koa-bodyparser';
import { logger } from "../log/logger";
import { rootRouter } from "./router/index";

const app = new Koa();

app.use(koaBodyparser());

/**
 * Main Router
 */
app.use(rootRouter.routes());

app.listen(3000, () => logger.info('server has started', process.env));
