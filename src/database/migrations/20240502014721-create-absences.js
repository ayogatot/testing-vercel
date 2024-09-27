'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('absences', {
			absence_id: {
				type: Sequelize.UUID,
				primaryKey: true,
				defaultValue: Sequelize.UUIDV4,
			},
			user_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'users',
					key: 'user_id',
				},
			},
			latitude: {
				type: Sequelize.STRING(128),
				allowNull: false,
			},
			longitude: {
				type: Sequelize.STRING(128),
				allowNull: false,
			},
			is_active: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true,
			},
			created_at: {
				type: Sequelize.BIGINT,
				defaultValue: new Date().getTime(),
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.BIGINT,
				defaultValue: null,
			},
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('absences')
	},
}
