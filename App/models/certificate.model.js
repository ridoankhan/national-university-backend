const Sequelize = require('sequelize');

class Certificate extends Sequelize.Model {

    static init(sequelize) {
        this.model = super.init(
            {
                certificate_id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                certificate_type: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
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
                    unique: true
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
                top_left_corner: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                top_right_corner: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                tx_hash: {
                    type: Sequelize.STRING,
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'Certificate',
                tableName: 'Certificate'
            }
        );

    }
}

module.exports = Certificate;
