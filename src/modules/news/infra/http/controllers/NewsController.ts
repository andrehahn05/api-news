import { NextFunction, Request, Response } from 'express';
import ListNewsService from '@modules/news/services/ListNewsService';
import CreateNewsService from '@modules/news/services/CreateNewsService';
import ShowNewsService from '@modules/news/services/ShowNewsService';
import UpdateNewsService from '@modules/news/services/UpdateNewsService';
import DeleteNewsService from '@modules/news/services/DeleteNewsService';

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
  public async update(req: Request, res: Response): Promise<Response> {
    let  data = req.body;
    const _id = req.params.id;
    
    const newsUpdate = new UpdateNewsService();

    const news = await newsUpdate.execute({_id,...data});

    return res.json(news);

  }
  public async delete(req: Request, res: Response): Promise<Response> {
    const _id = req.params.id;
    
    const del = new DeleteNewsService();

    await del.execute(_id);

    return res.status(200).send();

  }

}

export default  NewsController;
