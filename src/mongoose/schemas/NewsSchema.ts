import mongoose, { Schema } from 'mongoose';

interface INews {
  hat: string;
  title: string;
  text: string;
  author: string;
  img: string;
  publishDate: Date;
  link: string;
  active: boolean;
}

const NewsSchema = new Schema<INews>({
  hat: { type: String },
  title: { type: String },
  text: { type: String },
  author: { type: String },
  img: { type: String },
  publishDate: { type: Date },
  link: { type: String },
  active: { type: Boolean },
});

export default mongoose.model<INews>('News', NewsSchema);
