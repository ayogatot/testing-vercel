
import { ValidationError } from '../utils/ApiError.js'
import responseUtil from '../utils/Response.js'
import { objectToLogStr } from '../utils/ObjectToLog.js'
import userValidator from '../validators/user.validator.js'
import userService from '../services/auth.service.js'

const authController = {}

authController.register = async (req, res, next) => {
	try {
		console.log(`user registration request, data = ${objectToLogStr(req.body)}`)
		const validationResult = userValidator.register.validate(req.body)
		if (validationResult.error) {
			throw new ValidationError(validationResult.error.message)
		}

		const user = await userService.register(validationResult.value)
		responseUtil.success(res, user)
	} catch (e) {
		console.error(`user registration failed, error = ${e}`)
		next(e)
	}
}

authController.login = async (req, res, next) => {
	try {
		console.log(`user login request, data = ${objectToLogStr(req.body)}`)
		const validationResult = userValidator.login.validate(req.body)
		if (validationResult.error) {
			throw new ValidationError(validationResult.error.message)
		}

		const result = await userService.login(validationResult.value)
		responseUtil.success(res, result)
	} catch (e) {
		console.error(`user login failed, error = ${e}`)
		next(e)
	}
}

authController.getUserById = async (req, res, next) => {
	try {
		console.log(`get user by id request, data = ${objectToLogStr(req.params)}`)
		const result = await userService.getUserById(req.params)
		responseUtil.success(res, result)
	} catch (e) {
		console.error(`get user by id request failed, error = ${e}`)
		next(e)
	}
}

export default authController
