import { Schema, model, SchemaDefinition, SchemaOptions } from 'mongoose';
import { IRecordSeed, RecordDocument, RecordModel } from './record.interface';


const schemaDefinition: SchemaDefinition = {
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
};

const schemaOptions: SchemaOptions = {
  toJSON: {
    virtuals: true,
    transform: function(_doc: RecordDocument, ret: any) {
      delete ret._id;
      delete ret.__v;
    }
  }
};

export const recordSchema = new Schema(schemaDefinition, schemaOptions);


recordSchema.static({
  createOne: function(data: IRecordSeed) {
    return this.create(data);
  },
  deleteOneById: function (id: string) {
    return this.findByIdAndRemove(id);
  },
  fetchAll: function() {
    return this.find().exec();
  },
  fetchOneById: function(id: string) {
    return this.findById(id).exec();
  },
  updateOneById: function (id: string, update: any) {
    // @todo: update options
    // @see: http://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
    const options = {
      new: true
    };
    return this.findByIdAndUpdate(id, update, options);
  }
});

export const Record: RecordModel = model<RecordDocument, RecordModel>('Record', recordSchema);
