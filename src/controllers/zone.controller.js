import { viu_zone } from "../database/models";
import services from "../services/services";

const model = viu_zone;
const { findAll, create, update, destroy } = services;

export default class ZoneController {
  static listZones = async (req, res) => {
    findAll(res, model);
  };

  static createZone = async (req, res) => {
    const { name, status, country_id } = req.body;
    create(res, model, { name, status, country_id });
  };

  static updateZone = async (req, res) => {
    const condition = { zone_id: req.params.zoneId };
    const { name, status, country_id } = req.body;
    update(res, model, { name, status, country_id }, condition);
  };

  static deleteZone = async (req, res) => {
    const condition = { zone_id: req.params.zoneId };
    destroy(res, model, condition);
  };
}
