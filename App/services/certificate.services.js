const Certificate = require('../models/certificate.model.js');

class CertificateServices {
    constructor() {
    }

    createCertificate(req) {
        return new Promise((resolve, reject) => {
            Certificate
                .build({
                    name: req.body.name,
                    major: req.body.major,
                    grade: req.body.grade,
                    rollNo: req.body.rollNo,
                    tx_hash: req.body.tx_hash,
                    session: req.body.session,
                    student_id: req.body.student_id,
                    degree_name: req.body.degree_name,
                    college_name: req.body.college_name,
                    department_id: req.body.department_id,
                    degree_duration: req.body.degree_duration,
                    top_left_corner: req.body.top_left_corner,
                    top_right_corner: req.body.top_right_corner,
                    certificate_type: req.body.certificate_type,
                    registration_number: req.body.registration_number,
                })
                .save()
                .then((result) => {
                    console.log(result);
                    resolve('New Certificate created');
                })
                .catch((err) => {
                    console.log(err);
                    reject('Error creating new Certificate')
                });
        })
    }

    findByRegNumber(reg_number) {
        return new Promise((resolve, reject) => {
            Certificate.findOne({
                where: {
                    registration_number: reg_number
                }
            })
                .then(certificate => {
                    resolve(certificate.dataValues)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }


}

module.exports = CertificateServices;
