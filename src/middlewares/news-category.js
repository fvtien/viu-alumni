import newsCategory from "../validations/news-category";
import helpers from "../helpers/misc";

const { form } = newsCategory;
const { returnErrorMessages } = helpers;

const validateForm = async (req, res, next) => {
  const { error } = form(req.body);
  returnErrorMessages(error, res, next);
};

export default {
  validateForm,
};
