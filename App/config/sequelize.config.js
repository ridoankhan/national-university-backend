const Sqalize = require('sequelize');

class Sequelize {
    
    constructor () {
		this.sequelize = new Sqalize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
			host: process.env.HOST,
			dialect: process.env.DIALECT
		});
	}

	getConnectionObject() {
		return new Promise((resolve, reject) => {
			this.sequelize
				.authenticate()
				.then(() => {
                    console.log('Connection with database has been established successfully.');
                    resolve(this.sequelize);
				})
				.catch((err) => {
                    console.error('Unable to connect to the database:', err);
                    reject(new Error('Unable to connect to the database:', err));
				});
		});
	}
}

module.exports = Sequelize;
