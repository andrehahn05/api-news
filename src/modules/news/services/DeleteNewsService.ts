import AppError from 'src/shared/errors/AppError';
import { INews } from '@modules/news/models/INews';
import NewsSchema from '@src/modules/news/infra/mongoose/schema/NewsSchema';
class DeleteNewsService {
  public async execute(_id: string): Promise<string | void> {
    const news = await NewsSchema.findById(_id);

    if (!news) {
      throw new AppError('News not found');
    }

    await news.remove();
  }
}

export default new DeleteNewsService;
