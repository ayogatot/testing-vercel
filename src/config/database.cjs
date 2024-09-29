const mysql2 = require('mysql2');
require('dotenv/config');

module.exports = {
	dialect: process.env.DB_DIALECT,
	dialectModule: mysql2,
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	define: {
		timestamps: true,
	},
	pool: {
		max: 10,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
}
