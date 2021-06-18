import Joi from "joi";
import messages from "../utils/messages";
import authentication from "./authentication";

const { createErrorMessages } = authentication;

const form = data => {
  const schema = Joi.object({
    user_id: Joi.string()
      .regex(/^[0-9]+$/)
      .min(7)
      .max(7)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyUserId}`,
          `${messages.minUserId}`,
          `${messages.maxUserId}`,
          `${messages.invalidUserId}`
        )
      ),
    password: Joi.string()
      .regex(/^(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{6,20}$/)
      .min(6)
      .max(20)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyPassword}`,
          `${messages.minPassword}`,
          `${messages.maxPassword}`,
          `${messages.invalidPassword}`
        )
      ),
    firstName: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .min(3)
      .max(30)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyFirstName}`,
          `${messages.minFirstName}`,
          `${messages.maxFirstName}`,
          `${messages.invalidFirstName}`
        )
      ),
    lastName: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .min(3)
      .max(30)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyLastName}`,
          `${messages.minLastName}`,
          `${messages.maxLastName}`,
          `${messages.invalidLastName}`
        )
      ),
    date_birth: Joi.date(),
    phone_number: Joi.string()
      .regex(/^[+]+([0-9]{11,12})$/)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyPhone}`,
          `${messages.invalidPhone}`,
          `${messages.invalidPhone}`,
          `${messages.invalidPhone}`
        )
      ),
    faculty: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyFaculty}`,
          "",
          "",
          `${messages.invalidFaculty}`
        )
      ),
    majors: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyMajors}`,
          "",
          "",
          `${messages.invalidMajors}`
        )
      ),
    user_class: Joi.string()
      .regex(
        /^[0-9a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/
      )
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyUserClass}`,
          "",
          "",
          `${messages.invalidUserClass}`
        )
      ),
    user_group_id: Joi.string()
      .regex(/^[0-9]+$/)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyUserGroupId}`,
          "",
          "",
          `${messages.invalidUserGroupId}`
        )
      ),
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });
};

const login = data => {
  const schema = Joi.object({
    user_id: Joi.string()
      .regex(/^[0-9]+$/)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyUserId}`,
          "",
          "",
          `${messages.invalidUserId}`
        )
      ),
    password: Joi.string()
      .regex(/^(?=.*[!@#$%^&*?])[0-9a-zA-Z!@#$%^&*?]{6,20}$/)
      .min(6)
      .max(20)
      .required()
      .messages(
        createErrorMessages(
          "string",
          `${messages.emptyPassword}`,
          `${messages.minPassword}`,
          `${messages.maxPassword}`,
          `${messages.invalidPassword}`
        )
      ),
  });

  return schema.validate(data, {
    abortEarly: false,
    allowUnknown: false,
  });
};

export default {
  form,
  login,
};
