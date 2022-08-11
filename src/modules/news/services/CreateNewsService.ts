
import { INews } from '@modules/news/models/INews';
import NewsSchema from '@modules/news/infra/mongoose/schemas/NewsSchema';
import AppError from 'src/shared/errors/AppError';

class NewsCreateService {
  public async execute({ ...data }: INews): Promise<INews> {
    const exitsNews = await NewsSchema.findOne({ hat: data.hat });

    if (exitsNews) {
      throw new AppError('News is already registered.');
    }
    
    const news = await NewsSchema.create({ ...data });

    return news;
  }
}

export default NewsCreateService;
