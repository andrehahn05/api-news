import { INews } from '@modules/news/models/INews';
import AppError from 'src/shared/errors/AppError';
import NewsSchema from '../infra/mongoose/schemas/NewsSchema';

class  ListNewsService {
  public async execute(): Promise<INews[]> {
    let listNews:any [];
    listNews = await NewsSchema.find({});
    if (!listNews) {
      throw new AppError('No news to be displayed');
    }
    return listNews;
  }
}

export default  ListNewsService;
                  