import dotenv from 'dotenv'

dotenv.config()

import path from 'path'
import cors from 'cors'
import express from 'express'
import compression from 'compression'
import routes from './routes/index.js'
import globalErrorHandler from './middlewares/errorHandler.middleware.js'
import sequelizeModule from './modules/sequelize.module.js'

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = express()
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

// FOR VERCEL REQUIREMENTS
server.listen(process.env.SERVER_PORT, async () => {
	try {
		await sequelizeModule.init()

		console.log('🚀 Server initialized successfully')
	} catch (error) {
		console.error(error)
		process.exit(1)
	}
})
console.log('[EXPRESS] Express initialized')

export default server

// (async () => {
//   try {
//     for (const module of modules) {
//       await module.init();
//     }

//     console.log("🚀 Server initialized successfully");
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// })();
