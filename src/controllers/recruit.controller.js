import { viu_recruit } from "../database/models";
import services from "../services/services";

const model = viu_recruit;
const { findAll, create, update, destroy } = services;

export default class RecruitController {
  static listRecruits = async (req, res) => {
    findAll(res, model);
  };

  static createRecruit = async (req, res) => {
    const {
      job_name,
      company_name,
      image,
      email,
      phone_number,
      salary_min,
      salary_max,
      date_begin,
      date_end,
      skills,
      description,
      user_id,
      zone_id,
    } = req.body;
    create(res, model, {
      job_name,
      company_name,
      image,
      email,
      phone_number,
      salary_min,
      salary_max,
      date_begin,
      date_end,
      skills,
      description,
      user_id,
      zone_id,
    });
  };

  static updateRecruit = async (req, res) => {
    const condition = { recruit_id: req.params.recruitId };
    const {
      job_name,
      company_name,
      image,
      email,
      phone_number,
      salary_min,
      salary_max,
      date_begin,
      date_end,
      skills,
      description,
      user_id,
      zone_id,
    } = req.body;
    update(
      res,
      model,
      {
        job_name,
        company_name,
        image,
        email,
        phone_number,
        salary_min,
        salary_max,
        date_begin,
        date_end,
        skills,
        description,
        user_id,
        zone_id,
      },
      condition
    );
  };

  static deleteRecruit = async (req, res) => {
    const condition = { recruit_id: req.params.recruitId };
    destroy(res, model, condition);
  };
}
