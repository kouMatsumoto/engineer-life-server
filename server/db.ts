/**
 * This file set mongoose connection initialized
 *
 * to know emitted mongoose connection event types, see mongoose source code of
 *   - node_modules/@types/mongoose/index.d.ts: ConnectionBase
 *
 * how to handle events is referenced below
 *   - http://stackoverflow.com/questions/6676499/is-there-a-mongoose-connect-error-callback
 *   - http://theholmesoffice.com/mongoose-connection-best-practice/
 */

import { connect, Mongoose } from 'mongoose';
import { logger } from "../log/logger";


const dbURI = 'mongodb://localhost/engineer-life'; // TODO: refactor as environment var
const connectOptions = {
  promiseLibrary: Promise
};


/**
 * Connect and configure connection event handling of mongoose.
 */
export function initializeMongoose(): Mongoose {
  const mongoose: Mongoose = connect(dbURI, connectOptions);
  // use ES6 Promise instead of mongoose Built-in Promise
  mongoose.Promise = Promise;


  mongoose.connection.on('connecting', () => {
    logger.info('mongoose connecting');
  });

  mongoose.connection.on('connected', () => {
    logger.info('mongoose connected');
  });

  mongoose.connection.on('open', () => {
    logger.info('mongoose open');
  });

  mongoose.connection.on('disconnecting', () => {
    logger.info('mongoose disconnecting');
  });

  mongoose.connection.on('disconnected', () => {
    logger.info('mongoose disconnected');
  });

  mongoose.connection.on('close', () => {
    logger.info('mongoose close');
  });

  mongoose.connection.on('reconnected', () => {
    logger.warn('mongoose reconnected');
  });

  mongoose.connection.on('error', () => {
    logger.error('mongoose error');
  });


  return mongoose;
}
