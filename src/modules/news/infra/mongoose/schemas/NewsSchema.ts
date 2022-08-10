import mongoose, { Schema } from 'mongoose';
import { INews } from '@modules/news/models/INews';


const NewsSchema = new Schema({
  hat: { type: String },
  title: { type: String },
  text: { type: String },
  author: { type: String },
  img: { type: String },
  publishDate: { type: Date },
  link: { type: String },
  active: { type: Boolean },
});

export default mongoose.model('News', NewsSchema);

