import userGroup from "../validations/user-group";
import helpers from "../helpers/misc";

const { form } = userGroup;
const { returnErrorMessages } = helpers;

const validateForm = async (req, res, next) => {
  const { error } = form(req.body);
  returnErrorMessages(error, res, next);
};

export default {
  validateForm,
};
