
import express from 'express'
import globalErrorHandler from '../middlewares/errorHandler.middleware.js'
import routes from '../routes/index.js'
import compression from 'compression'
import path from 'path'
import cors from 'cors'

let server

const expressService = {
	init: async () => {
		try {
			server = express()
			server.use(compression())
			server.use(express.json())
			server.use(cors({ origin: '*' }))
			server.use(express.urlencoded({ extended: true }))
			server.use('/uploads', express.static(path.join(__dirname, '../uploads')))

			// Base URL
			server.get('/', (req, res) => res.send('Hello World'))

			// Routes
			server.use('/api/v1/auth', routes.authRoutes)
			server.use('/api/v1/absences', routes.absencesRoutes)

			server.use(globalErrorHandler)

			server.listen(process.env.SERVER_PORT)
			console.log('[EXPRESS] Express initialized')
		} catch (error) {
			console.error('[EXPRESS] Error during express service initialization')
			throw error
		}
	},
}

export default expressService
