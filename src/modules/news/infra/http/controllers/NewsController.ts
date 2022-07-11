import { NextFunction, Request, Response } from 'express';
import ListNewsService from '@modules/news/services/ListNewsService';
import CreateNewsService from '@modules/news/services/CreateNewsService';
import ShowNewsService from '@modules/news/services/ShowNewsService';

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
  public async show(req: Request, res: Response): Promise<Response> {
    const _id = req.params.id;
    
    const newsShow = new ShowNewsService();

    const news = await newsShow.execute(_id);

    return res.json(news);


  }
}

export default  NewsController;
