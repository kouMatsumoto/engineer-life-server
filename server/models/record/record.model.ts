import { Schema, model } from 'mongoose';
import { IRecordSeed, RecordDocument, RecordModel } from './record.interface';


export const recordSchema = new Schema({
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
  }
});

recordSchema.static({
  createOne: function(data: IRecordSeed) {
    return this.create(data);
  },
  fetchAll: function() {
    return this.find().exec();
  }
});

export const Record: RecordModel = model<RecordDocument, RecordModel>('Record', recordSchema);
