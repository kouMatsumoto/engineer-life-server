import { Document, Model } from 'mongoose';

export interface IRecord {
  _id: string;
  date: string; // datetime string
  title: string;
  condition: number;
  note: string;
}

export interface IRecordSeed {
  date: Date;
  title: string;
  condition: number;
  note: string;
}


export interface RecordDocument extends IRecord, Document {
  _id: string; // override Document._id: any
}

export interface RecordModel extends Model<RecordDocument> {
  createOne(data: IRecordSeed): Promise<RecordDocument>;
  fetchAll(): Promise<RecordDocument[]>;
  fetchOneById(id: string): Promise<RecordDocument>;
  updateOneById(id: string, update: any): Promise<RecordDocument>;
}
