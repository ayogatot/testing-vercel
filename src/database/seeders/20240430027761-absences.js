'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('absences', [
			{
				absence_id: 'cf7736b0-bb8d-47d9-8510-49e4c1bff610',
				user_id: 'f4771118-2aba-4c3d-b16c-143dbccc4fa1',
				latitude: '123.123',
				longitude: '123.123',
				is_active: true,
				created_at: 1714620212891,
				updated_at: null,
			},
			{
				absence_id: '70340995-5b3d-4745-822f-9ea3aa08ca60',
				user_id: 'f4771118-2aba-4c3d-b16c-143dbccc4fa1',
				latitude: '123.123',
				longitude: '123.123',
				is_active: false,
				created_at: 1714619993065,
				updated_at: 1714620198066,
			},
			{
				absence_id: 'a3183862-3e1d-403d-9b8f-17c665c104b7',
				user_id: 'f4771118-2aba-4c3d-b16c-143dbccc4fa1',
				latitude: '123.123',
				longitude: '123.123',
				is_active: true,
				created_at: 1714619956069,
				updated_at: null,
			},
		])
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('absences', null, {})
	},
}
