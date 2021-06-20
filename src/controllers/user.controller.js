import _ from "lodash";
import { viu_user } from "../database/models";
import services from "../services/services";
import misc from "../helpers/misc.js";
import statusCodes from "../utils/statusCodes";
import messages from "../utils/messages";
// import redisClient from "../config/redisClient";

const { success, serverError, unauthorized } = statusCodes;
const { loginSuccessful, logoutSuccessful } = messages;

const {
  successResponse,
  errorResponse,
  generateToken,
  generateHashedPassword,
} = misc;

const model = viu_user;
const { findAll, create, update, destroy } = services;

export default class UserController {
  static listUsers = async (req, res) => {
    findAll(res, model, {
      attributes: {
        exclude: ["password"],
      },
    });
  };

  static createUser = async (req, res) => {
    const {
      user_id,
      image,
      password,
      firstName,
      lastName,
      date_birth,
      phone_number,
      faculty,
      majors,
      user_class,
      status,
      user_group_id,
    } = req.body;

    const hashedPassword = await generateHashedPassword(password);

    const userObj = {
      user_id,
      image,
      password: hashedPassword,
      firstName,
      lastName,
      date_birth,
      phone_number,
      faculty,
      majors,
      user_class,
      status,
      user_group_id,
    };

    const tokenData = _.pick(userObj, ["user_id"]);

    const token = await generateToken(tokenData);

    create(res, model, userObj, token);
  };

  static updateUser = async (req, res) => {
    const condition = { user_id: req.params.userId };
    const {
      image,
      password,
      firstName,
      lastName,
      date_birth,
      phone_number,
      faculty,
      majors,
      user_class,
      status,
      user_group_id,
    } = req.body;

    const hashedPassword = await generateHashedPassword(password);

    const userObj = {
      image,
      password: hashedPassword,
      firstName,
      lastName,
      date_birth,
      phone_number,
      faculty,
      majors,
      user_class,
      status,
      user_group_id,
    };

    const tokenData = _.pick(userObj, "user_id");

    const token = await generateToken(tokenData);

    update(res, model, userObj, condition, token);
  };

  static deleteUser = async (req, res) => {
    const condition = { user_id: req.params.userId };
    destroy(res, model, condition);
  };

  static login = async (req, res) => {
    try {
      const data = _.omit(req.userData, ["password"]);
      const token = await generateToken(data);
      return successResponse(res, success, loginSuccessful, token, data);
    } catch (error) {
      return errorResponse(res, serverError, error);
    }
  };

  // static logout = async (req, res) => {
  //   try {
  //     const token = req.get("authorization").split(" ").pop();
  //     redisClient.sadd("token", token);
  //     return successResponse(res, success, logoutSuccessful, null, null);
  //   } catch (error) {
  //     return errorResponse(res, unauthorized, null);
  //   }
  // };
}
