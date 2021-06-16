import statusCodes from "../utils/statusCodes";
import messages from "../utils/messages";
import misc from "../helpers/misc";

const { success, created, notFound, serverError } = statusCodes;
const {
  createdSuccessful,
  updatedSuccessful,
  deletedSuccessful,
  dataList,
  dataNotFound,
} = messages;
const { successResponse, errorResponse } = misc;

const findAll = async (res, model, obj) => {
  try {
    const data = await model.findAll(obj);

    if (data.length != 0) {
      return successResponse(res, success, dataList, null, data);
    }
    return successResponse(res, notFound, dataNotFound, null, data);
  } catch (error) {
    return errorResponse(res, serverError, error);
  }
};

const create = async (res, model, obj) => {
  try {
    const data = await model.create(obj);
    return successResponse(
      res,
      created,
      createdSuccessful,
      null,
      data.dataValues
    );
  } catch (error) {
    return errorResponse(res, serverError, error);
  }
};

const update = async (res, model, data, condition) => {
  try {
    const dataValues = await model.update(data, {
      where: condition,
      returning: true,
      plain: true,
    });
    return successResponse(
      res,
      success,
      updatedSuccessful,
      null,
      dataValues[1]
    );
  } catch (error) {
    return errorResponse(res, serverError, error);
  }
};

const destroy = async (res, model, condition) => {
  try {
    await model.destroy({
      where: condition,
    });
    return successResponse(res, success, deletedSuccessful, null, null);
  } catch (error) {
    return errorResponse(res, serverError, error);
  }
};

const findOne = async (res, model, condition) => {
  try {
    const dataValue = await model.findOne({
      where: condition,
      include: [{ all: true }],
    });
    return successResponse(res, success, null, null, dataValue);
  } catch (error) {
    return errorResponse(res, serverError, error);
  }
};

export default {
  findAll,
  create,
  update,
  destroy,
  findOne,
};
