import AppError from 'src/errors/AppError';
import { INews } from '@modules/news/domain/models/INews';
import NewsSchema from '@modules/news/infra/mongoose/schemas/NewsSchema';

class ShowNewsService {
  public async execute(_id: string): Promise<INews | any> {
    const news = await NewsSchema.findById(_id);

    if (!news) {
      throw new AppError('News not found');
    }
    return news;
  }
}

export default ShowNewsService;
