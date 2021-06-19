import menu from "../validations/menu";
import helpers from "../helpers/misc";

const { form } = menu;
const { returnErrorMessages } = helpers;

const validateForm = async (req, res, next) => {
  const { error } = form(req.body);
  returnErrorMessages(error, res, next);
};

export default {
  validateForm,
};
