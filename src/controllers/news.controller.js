import { viu_news } from "../database/models";
import services from "../services/services";

const model = viu_news;
const { findAll, create, update, destroy } = services;

export default class NewsController {
  static listNews = async (req, res) => {
    findAll(res, model);
  };

  static createNews = async (req, res) => {
    const {
      name,
      image,
      short_description,
      description,
      status,
      news_category_id,
      user_id,
    } = req.body;
    create(res, model, {
      name,
      image,
      short_description,
      description,
      status,
      news_category_id,
      user_id,
    });
  };

  static updateNews = async (req, res) => {
    const condition = { news_id: req.params.newsId };
    const {
      name,
      image,
      short_description,
      description,
      status,
      news_category_id,
      user_id,
    } = req.body;
    update(
      res,
      model,
      {
        name,
        image,
        short_description,
        description,
        status,
        news_category_id,
        user_id,
      },
      condition
    );
  };

  static deleteNews = async (req, res) => {
    const condition = { news_id: req.params.newsId };
    destroy(res, model, condition);
  };
}
