import { viu_menu } from "../database/models";
import services from "../services/services";

const model = viu_menu;
const { findAll, create, update, destroy } = services;

export default class MenuController {
  static listMenus = async (req, res) => {
    findAll(res, model);
  };

  static createMenu = async (req, res) => {
    const { parent_id, title, url } = req.body;
    create(res, model, { parent_id, title, url });
  };

  static updateMenu = async (req, res) => {
    const condition = { id: req.params.menuId };
    const { parent_id, title, url } = req.body;
    update(res, model, { parent_id, title, url }, condition);
  };

  static deleteMenu = async (req, res) => {
    const condition = { id: req.params.menuId };
    destroy(res, model, condition);
  };
}
