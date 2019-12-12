const Sequelize = require('sequelize');

class Student extends Sequelize.Model {

	static init(sequelize) {
		this.model = super.init(
			{
				name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				college_name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				rollNo: {
					type: Sequelize.STRING,
					allowNull: false,
					unique: true
				},
				registration_number: {
					type: Sequelize.STRING,
					allowNull: false,
					primaryKey: true
				},
				session: {
					type: Sequelize.STRING,
					allowNull: false
				},
				major: {
					type: Sequelize.STRING,
					allowNull: false
				},
				degree_name: {
					type: Sequelize.STRING,
					allowNull: false
				},
				degree_duration: {
					type: Sequelize.STRING,
					allowNull: false
				},
				grade: {
					type: Sequelize.STRING,
					allowNull: false
				},
				start_date: {
					type: Sequelize.STRING,
					allowNull: false
				},
				end_date: {
					type: Sequelize.STRING,
					allowNull: false
				}

			},
			{
				sequelize,
				modelName: 'Student',
				tableName: 'Student'
			}
		);

	}
}

module.exports = Student;
