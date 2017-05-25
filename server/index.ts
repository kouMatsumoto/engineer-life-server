import * as Koa from 'koa';
import * as koaBodyparser from 'koa-bodyparser';
import {logger} from "../log/logger";

const app = new Koa();

app.use(koaBodyparser());

app.listen(3000, () => logger.info('server has started', process.env));
