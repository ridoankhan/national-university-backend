const Sequelize = require('./sequelize.config.js');
const Student = require('../models/student.model.js');
const Certificate = require('../models/certificate.model.js');

class DatabaseConfigurator {
	constructor() {
		console.log('DatabaseConfigurator constructor');
		this.sequelize = new Sequelize();
	}

	configure() {
		this.sequelize
			.getConnectionObject()
			.then((connection) => {
				this.initializeDbTables(connection);
				this.createAssociations();
				this.syncWithDatabaseEngine();
			})
			.catch((error) => {
				console.log(error);
			});
	}

	initializeDbTables(connection) {

		Student.init(connection);
		Certificate.init(connection);

	}

	createAssociations() {
		// this.belongsToOne(Student.model, Degree.model, 'degree_id');
		// this.belongsToOne(Student.model, College.model, 'college_id')
		// this.belongsToOne(Student.model, Session.model, 'session_id');
		// this.belongsToOne(Student.model, Department.model, 'department_id');
		//Student.model.belongsTo(Department.model, { foreignKey: 'department_id' });
		this.belongsToOne(Certificate.model, Student.model, 'registration_number');
	}

	belongsToOne(referencing_model, referenced_model, foreign_key) {
		referencing_model.belongsTo(referenced_model, { foreignKey: foreign_key })
	}

	syncWithDatabaseEngine() {
		// Admin.model.sync({ force: true });
		// Degree.Admin.model.sync();model.sync({ force: true });
		// Student.model.sync({ force: true });
		// Department.model.sync({ force: true });


		Student.model.sync();
		Certificate.model.sync();

	}
}

module.exports = DatabaseConfigurator;
