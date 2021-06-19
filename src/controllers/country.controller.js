import { viu_country } from "../database/models";
import services from "../services/services";

const model = viu_country;
const { findAll, create, update, destroy } = services;

export default class CountryController {
  static listCountries = async (req, res) => {
    findAll(res, model);
  };

  static createCountry = async (req, res) => {
    const { name, status } = req.body;
    create(res, model, { name, status });
  };

  static updateCountry = async (req, res) => {
    const condition = { country_id: req.params.countryId };
    const { name, status } = req.body;
    update(res, model, { name, status }, condition);
  };

  static deleteCountry = async (req, res) => {
    const condition = { country_id: req.params.countryId };
    destroy(res, model, condition);
  };
}
