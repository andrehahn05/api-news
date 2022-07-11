import { NextFunction, Request, Response } from 'express';
import ListNewsService from '@modules/news/services/ListNewsService';
import CreateNewsService from '@modules/news/services/CreateNewsService';

class NewsController {
  public async store(req: Request, res: Response): Promise<Response> {
    const data = req.body;
    const createNews = new CreateNewsService();
    const news = await createNews.execute({ ...data });
    return res.json(news);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const listNews = new ListNewsService();

    const news = await listNews.execute();

    return res.json(news);
  }
}

export default  NewsController;
