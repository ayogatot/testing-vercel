import Joi from 'joi'

const absenceValidator = {}

const userId = Joi.string().required().messages({
	'string.empty': 'user_id cannot be an empty',
	'any.required': 'user_id is required',
})

const latitude = Joi.string().required().messages({
	'string.empty': 'latitude cannot be an empty',
	'any.required': 'latitude is required',
})

const longitude = Joi.string().required().messages({
	'string.empty': 'longitude cannot be an empty',
	'any.required': 'longitude is required',
})

absenceValidator.add = Joi.object().keys({
  user_id: userId,
	latitude,
	longitude,
})

absenceValidator.update = Joi.object().keys({
	latitude,
	longitude,
	is_active: Joi.boolean().required().messages({
		'any.required': 'is_active is required',
	}),
})

export default absenceValidator
