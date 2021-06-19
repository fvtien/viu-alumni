import recruit from "../validations/recruit";
import helpers from "../helpers/misc";

const { form } = recruit;
const { returnErrorMessages } = helpers;

const validateForm = async (req, res, next) => {
  const { error } = form(req.body);
  returnErrorMessages(error, res, next);
};

export default {
  validateForm,
};
