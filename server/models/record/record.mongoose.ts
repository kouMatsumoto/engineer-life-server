/**
 * Mongoose ODM must be not exposed.
 * Use *.model instead.
 * *.model is adapter class of primitive model e.g. mongoose and google cloud datastore.
 */

import { Schema, Document, model } from 'mongoose';
import { Record } from './record';


const recordSchema = new Schema({
  date: {
    type: Date,
    default: new Date(),
    required: true
  },
  title: {
    type: String,
    maxlength: 50,
    trim: true,
    required: true
  },
  condition: {
    type: Number,
    required: true
  },
  note: {
    type: String,
    trim: true,
    required: true
  },
});

const RecordMongoose = model<Record & Document>('Record', recordSchema);


export {
  RecordMongoose
}
