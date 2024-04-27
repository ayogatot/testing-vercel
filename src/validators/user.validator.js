import Joi from "joi";

const userValidator = {};

const name = Joi.string().min(3).max(30).required().messages({
  "string.empty": "name cannot be an empty",
  "string.min": "name should have a minimum length of {#limit}",
  "string.max": "name should have a maximum length of {#limit}",
  "any.required": "name is required",
});

const email = Joi.string()
  .required()
  .pattern(new RegExp("^[\\w-\\.]+@([\\w-]+.)+[\\w-]{2,4}$"))
  .messages({
    "string.empty": "email cannot be an empty",
    "string.pattern.base": "email is invalid",
    "any.required": "email is required",
  });

const password = Joi.string().required().messages({
  "string.empty": "password cannot be an empty",
  "any.required": "password is required",
});

userValidator.login = Joi.object().keys({
  email,
  password,
});

userValidator.register = Joi.object().keys({
  name,
  email,
  password,
});

export default userValidator;
