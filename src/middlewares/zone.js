import zone from "../validations/zone";
import helpers from "../helpers/misc";

const { form } = zone;
const { returnErrorMessages } = helpers;

const validateForm = async (req, res, next) => {
  const { error } = form(req.body);
  returnErrorMessages(error, res, next);
};

export default {
  validateForm,
};
