import Joi from "joi";

const absenceValidator = {};

const title = Joi.string().required().messages({
  "string.empty": "title cannot be an empty",
  "any.required": "title is required",
})

const job_description = Joi.string().required().messages({
  "string.empty": "job_description cannot be an empty",
  "any.required": "job_description is required",
})

const requirements = Joi.string().required().messages({
  "string.empty": "requirement cannot be an empty",
  "any.required": "requirement is required",
})

absenceValidator.add = Joi.object().keys({
  title ,
  job_description,
  requirements,
});

absenceValidator.update = Joi.object().keys({
  title,
  job_description,
  requirements,
  is_active: Joi.boolean().required().messages({
    "any.required": "is_active is required",
  }),
});

export default absenceValidator;
