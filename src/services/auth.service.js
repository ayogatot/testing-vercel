
import { DuplicateRecordError, UnauthorizedError, NotFoundError } from '../utils/ApiError.js'
import { objectToLogStr } from '../utils/ObjectToLog.js'
import Users from '../models/Users.js'
import JwtService from '../modules/jwt.module.js'

const userService = {}

userService.register = async (user) => {
	console.log(`add user, user = ${objectToLogStr(user)}`)
	const existingUser = await Users.findOne({ where: { email: user.email } })

	if (!existingUser) {
		user.role = 'ADMIN'
		user.created_at = new Date().getTime()
		const newUser = await Users.create(user)
		console.log(`user created, user = ${newUser.id}`)
		return newUser
	}

	throw new DuplicateRecordError('User already exists')
}

userService.login = async (body) => {
	console.log(`user login, user = ${objectToLogStr(body)}`)
	const user = await Users.findOne({ where: { email: body.email } })

	if (user) {
		const isPasswordMatch = await user.checkPassword(body.password)
		if (isPasswordMatch) {
			const token = JwtService.jwtSign(user.user_id)
			return { user, token }
		}

		throw new UnauthorizedError('Password does not match')
	}

	throw new NotFoundError('User not found')
}

userService.getUserById = async (params) => {
	console.log(`user by id, user = ${objectToLogStr(params)}`)
	const user = await Users.findOne({ where: { user_id: params.user_id } })

	if (user) return user

	throw new NotFoundError('User not found')
}

export default userService
