import { objectToLogStr } from '../utils/ObjectToLog.js'
import Absences from '../models/Absences.js'
import pagedData from '../utils/PagedData.js'
import { NotFoundError } from '../utils/ApiError.js'
import getAbsenceQuery from '../utils/query/absences.query.js'

const absenceService = {}

absenceService.getAll = async (query) => {
	console.log(`get all absence, with query = ${objectToLogStr(query)}`)
	const { rows: absences, count: totalItems } = await Absences.findAndCountAll({
		where: getAbsenceQuery(query),
	})
	console.log('sucessfully get all absences')

	return pagedData(absences, totalItems)
}

absenceService.add = async (absence) => {
	console.log(`add absence, absence = ${objectToLogStr(absence)}`)

	absence.is_active = true
	absence.created_at = new Date().getTime()
	const newAbsence = await Absences.create(absence)
	console.log(`absence created, absence = ${newAbsence.id}`)

	return newAbsence
}

absenceService.update = async (absenceId, absence) => {
	console.log(`update absence, absence = ${objectToLogStr(absence)}`)

	const existingAbsence = await Absences.findOne({ where: { absence_id: absenceId } })

	if (!existingAbsence) {
		throw new NotFoundError(`absence not found, id = ${absenceId}`)
	}

	existingAbsence.is_active = false
	existingAbsence.updated_at = new Date().getTime()
	await existingAbsence.save()
	console.log(`absence updated, absence = ${absenceId}`)

	return existingAbsence
}

export default absenceService
