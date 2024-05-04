import Joi from "joi";

const newsValidator = {};

newsValidator.addOrUpdate = Joi.object().keys({
  title: Joi.string().optional().allow(null).messages({
    "any.required": "title is required",
  }),
  subtitle: Joi.string().optional().allow(null).messages({
    "string.empty": "subtitle cannot be an empty",
    "any.required": "subtitle is required",
  }),
  content: Joi.string().optional().allow(null).messages({
    "string.empty": "content cannot be an empty",
    "any.required": "content is required",
  }),
});

export default newsValidator;
