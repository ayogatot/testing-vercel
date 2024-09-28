import { logger } from 'express-glass'
import { ValidationError } from '../utils/ApiError'
import responseUtil from '../utils/Response'
import { objectToLogStr } from '../utils/ObjectToLog'
import absenceValidator from '../validators/absences.validator'
import absenceService from '../services/absences.service'

const absenceController = {}

absenceController.getAll = async (req, res, next) => {
	try {
		logger().info(`get all absence request, data = ${objectToLogStr(req.query)}`)
		const result = await absenceService.getAll(req.query)
		responseUtil.success(res, result)
	} catch (e) {
		logger().error(`absence login failed, error = ${e}`)
		next(e)
	}
}

absenceController.add = async (req, res, next) => {
	try {
		logger().info(`absence add request, data = ${objectToLogStr(req.body)}`)
		const validationResult = absenceValidator.add.validate(req.body)
		if (validationResult.error) {
			throw new ValidationError(validationResult.error.message)
		}

		const absence = await absenceService.add(validationResult.value)
		responseUtil.success(res, absence)
	} catch (e) {
		logger().error(`absence registration failed, error = ${e}`)
		next(e)
	}
}

absenceController.update = async (req, res, next) => {
	try {
		logger().info(`absence update request, data = ${objectToLogStr(req.params)}`)

		const absence = await absenceService.update(req.params.absence_id)
		responseUtil.success(res, absence)
	} catch (e) {
		logger().error(`absence registration failed, error = ${e}`)
		next(e)
	}
}

export default absenceController
