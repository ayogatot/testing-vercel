'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('users', [
			{
				user_id: 'f4771118-2aba-4c3d-b16c-143dbccc4fa1',
				name: 'Super Admin',
				email: 'admin@training.com',
				phone_number: '081234567890',
				password: '$2a$08$gk7nP3xI37ACg8hLWwTWp.kw62yHtAbGpQ4Oqw4VbDWyA9SxQ5uTC', // 123456
				created_at: new Date().getTime(),
				updated_at: new Date().getTime(),
			},
		])
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('users', null, {})
	},
}
