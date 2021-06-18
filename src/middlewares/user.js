import jwt from "jsonwebtoken";
import user from "../validations/user";
import helpers from "../helpers/misc";
import statusCodes from "../utils/statusCodes";
import messages from "../utils/messages";
import { viu_user } from "../database/models";
import services from "../services/services";
import redisClient from "../config/redisClient";

const model = viu_user;
const { findOne } = services;

const { form, login } = user;
const { errorResponse, returnErrorMessages, isPasswordValid } = helpers;
const { conflict, notFound, unauthorized, badRequest, serverError } =
  statusCodes;
const {
  conflictUserId,
  loginErrorUserId,
  loginErrorPassword,
  invalidRequest,
  invalidToken,
} = messages;

const validateForm = async (req, res, next) => {
  const { error } = form(req.body);
  returnErrorMessages(error, res, next);
};

const isUserRegistered = async (req, res, next) => {
  const { user_id } = req.body;
  const condition = { user_id };
  const userRegistered = await findOne(res, model, condition);
  if (userRegistered) {
    return errorResponse(res, conflict, conflictUserId);
  }
  next();
};

const validateLogin = async (req, res, next) => {
  const { error } = login(req.body);
  returnErrorMessages(error, res, next);
};

const checkLogin = async (req, res, next) => {
  try {
    const { user_id, password } = req.body;
    const condition = { user_id };
    const userData = await findOne(res, model, condition);
    if (!userData) {
      return errorResponse(res, notFound, loginErrorUserId);
    }
    const dbPassword = userData.dataValues.password;
    const passwordsMatch = await isPasswordValid(password, dbPassword);
    if (!passwordsMatch) {
      return errorResponse(res, unauthorized, loginErrorPassword);
    }
    req.userData = userData.dataValues;
    return next();
  } catch (error) {
    return errorResponse(res, conflict, conflictUserId);
  }
};

const checkUserToken = async (req, res, next) => {
  let token = req.get("authorization");
  if (!token) {
    return errorResponse(res, badRequest, invalidRequest);
  }
  try {
    token = token.split(" ").pop();
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const { user_id } = decodedToken;
    const condition = { user_id };
    const userData = await findOne(res, model, condition);
    return redisClient.smembers("token", async (err, tokensArray) => {
      if (err) {
        return errorResponse(res, serverError, err.message);
      }
      if (tokensArray.includes(token, 0) || !userData) {
        return errorResponse(res, unauthorized, invalidToken);
      }
      req.userData = userData.dataValues;
      return next();
    });
  } catch (error) {
    return errorResponse(res, badRequest, invalidToken);
  }
};

export default {
  validateForm,
  isUserRegistered,
  validateLogin,
  checkLogin,
  checkUserToken,
};
