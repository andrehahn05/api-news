import AppError from 'src/shared/errors/AppError';
import { INews } from '@modules/news/models/INews';
import NewsSchema from '@modules/news/infra/mongoose/schemas/NewsSchema';

class ShowNewsService {
  public async execute(_id: string): Promise<INews | any> {
  
    if(!_id ) {
      
      throw new AppError('Required id')
    }
    const news = await NewsSchema.findById(_id);

    if (!news) {
      throw new AppError('News not found');
    }
    return news;
  }
}

export default ShowNewsService;
