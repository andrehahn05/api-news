import AppError from 'src/shared/errors/AppError';
import { INews } from '../models/INews';
import NewsSchema from '@modules/news/infra/mongoose/schemas/NewsSchema';

interface IUpdateNews {
  _id: string;
  data: INews;
}
class UpdateNewsService {
  public async execute({ _id, ...data }: IUpdateNews): Promise<INews> {
    const news = await NewsSchema.findByIdAndUpdate(
      _id,
      { ...data },
      { new: true },
    );

    if (!news) {
      throw new AppError('Not Found');
    }
    return news;
  }
}

export default UpdateNewsService;
