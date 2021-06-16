import { viu_user_group } from "../database/models";
import services from "../services/services";

const model = viu_user_group;
const { findAll, create, update, destroy } = services;

export default class UserGroupController {
  static listUserGroups = async (req, res) => {
    findAll(res, model);
  };

  static createUserGroup = async (req, res) => {
    const { name, permission } = req.body;
    create(res, model, { name, permission });
  };

  static updateUserGroup = async (req, res) => {
    const condition = { user_group_id: req.params.userGroupId };
    const { name, permission } = req.body;
    update(res, model, { name, permission }, condition);
  };

  static deleteUserGroup = async (req, res) => {
    const condition = { user_group_id: req.params.userGroupId };
    destroy(res, model, condition);
  };
}
