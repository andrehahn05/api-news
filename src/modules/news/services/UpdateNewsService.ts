import AppError from 'src/shared/errors/AppError';
import { INews } from '../models/INews';
import NewsSchema from '@src/modules/news/infra/mongoose/schema/NewsSchema';

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

export default new UpdateNewsService;
