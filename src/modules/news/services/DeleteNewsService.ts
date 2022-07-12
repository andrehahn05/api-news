import AppError from 'src/errors/AppError';
import { INews } from '@modules/news/domain/models/INews';
import NewsSchema from '@modules/news/infra/mongoose/schemas/NewsSchema';
class DeleteNewsService {
  public async execute(_id: string): Promise<string | void> {
    const news = await NewsSchema.findById(_id);

    if (!news) {
      throw new AppError('News not found');
    }

    await news.remove();
  }
}

export default DeleteNewsService;
