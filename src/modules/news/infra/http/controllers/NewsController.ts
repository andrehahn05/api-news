import { Request, Response } from 'express';
import ListNewsService from '@modules/news/services/ListNewsService';
import CreateNewsService from '@modules/news/services/CreateNewsService';
import ShowNewsService from '@modules/news/services/ShowNewsService';
import UpdateNewsService from '@modules/news/services/UpdateNewsService';
import DeleteNewsService from '@modules/news/services/DeleteNewsService';

class NewsController {
  public async store(req: Request, res: Response): Promise<Response> {
    const data = req.body;

    const news = await CreateNewsService.execute({ ...data });
    
    return res.json(news);
  }

  public async index(req: Request, res: Response): Promise<Response> {

    const news = await ListNewsService.execute();

    return res.json(news);
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const _id = req.params.id;

    const news = await ShowNewsService.execute(_id);

    return res.json(news);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    let data = req.body;
    const _id  = req.params.id;

    const news = await UpdateNewsService.execute({ _id, ...data });

    return res.json(news);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const _id = req.params.id;

    await DeleteNewsService.execute(_id);

    return res.status(200).send();
  }
}

export default new NewsController;
