import { logger } from 'express-glass'
import { ValidationError } from '../utils/ApiError'
import responseUtil from '../utils/Response'
import { objectToLogStr } from '../utils/ObjectToLog'
import userValidator from '../validators/user.validator'
import userService from '../services/auth.service'

const authController = {}

authController.register = async (req, res, next) => {
	try {
		logger().info(`user registration request, data = ${objectToLogStr(req.body)}`)
		const validationResult = userValidator.register.validate(req.body)
		if (validationResult.error) {
			throw new ValidationError(validationResult.error.message)
		}

		const user = await userService.register(validationResult.value)
		responseUtil.success(res, user)
	} catch (e) {
		logger().error(`user registration failed, error = ${e}`)
		next(e)
	}
}

authController.login = async (req, res, next) => {
	try {
		logger().info(`user login request, data = ${objectToLogStr(req.body)}`)
		// const validationResult = userValidator.login.validate(req.body)
		// if (validationResult.error) {
		// 	throw new ValidationError(validationResult.error.message)
		// }

		const result = await userService.login(validationResult.value)
		responseUtil.success(res, result)
	} catch (e) {
		logger().error(`user login failed, error = ${e}`)
		next(e)
	}
}

authController.getUserById = async (req, res, next) => {
	try {
		logger().info(`get user by id request, data = ${objectToLogStr(req.params)}`)
		const result = await userService.getUserById(req.params)
		responseUtil.success(res, result)
	} catch (e) {
		logger().error(`get user by id request failed, error = ${e}`)
		next(e)
	}
}

export default authController
