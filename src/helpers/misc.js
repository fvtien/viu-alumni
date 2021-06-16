import statusCodes from "../utils/statusCodes";

const successResponse = (res, statusCode, message, token, data) =>
  res.status(statusCode).json({
    message,
    token,
    data,
  });

const errorResponse = (res, statusCode, error) =>
  res.status(statusCode).json({ error });

const returnErrorMessages = (errors, res, next) => {
  if (errors) {
    const { details } = errors;
    const errorMessages = details
      .map(error => error.message.replace(/['"]/g, ""))
      .join(", ");
    return errorResponse(res, statusCodes.badRequest, errorMessages);
  }
  return next();
};

export default {
  successResponse,
  errorResponse,
  returnErrorMessages,
};
