import { viu_news_category } from "../database/models";
import services from "../services/services";

const model = viu_news_category;
const { findAll, create, update, destroy } = services;

export default class NewsCategoryController {
  static listNewsCategories = async (req, res) => {
    findAll(res, model);
  };

  static createNewsCategory = async (req, res) => {
    const { parent_id, title } = req.body;
    create(res, model, { parent_id, title });
  };

  static updateNewsCategory = async (req, res) => {
    const condition = { news_category_id: req.params.newsCategoryId };
    const { parent_id, title } = req.body;
    update(res, model, { parent_id, title }, condition);
  };

  static deleteNewsCategory = async (req, res) => {
    const condition = { news_category_id: req.params.newsCategoryId };
    destroy(res, model, condition);
  };
}
