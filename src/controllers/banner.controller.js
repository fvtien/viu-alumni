import { viu_banner } from "../database/models";
import services from "../services/services";

const model = viu_banner;
const { findAll, create, update, destroy } = services;

export default class BannerController {
  static listBanners = async (req, res) => {
    findAll(res, model);
  };

  static createBanner = async (req, res) => {
    const { title, image, link, description } = req.body;
    create(res, model, { title, image, link, description });
  };

  static updateBanner = async (req, res) => {
    const condition = { banner_id: req.params.bannerId };
    const { title, image, link, description } = req.body;
    update(res, model, { title, image, link, description }, condition);
  };

  static deleteBanner = async (req, res) => {
    const condition = { banner_id: req.params.bannerId };
    destroy(res, model, condition);
  };
}
