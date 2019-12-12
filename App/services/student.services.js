const Student = require('../models/student.model.js');

class StudentService {

    constructor() {

    }

    createStudent(req) {
        return new Promise((resolve, reject) => {
            Student
                .build({
                    name: req.body.name,
                    major: req.body.major,
                    grade: req.body.grade,
                    rollNo: req.body.rollNo,
                    session: req.body.session,
                    end_date: req.body.end_date,
                    start_date: req.body.start_date,
                    student_id: req.body.student_id,
                    degree_name: req.body.degree_name,
                    college_name: req.body.college_name,
                    department_id: req.body.department_id,
                    degree_duration: req.body.degree_duration,
                    registration_number: req.body.registration_number,
                })
                .save()
                .then((result) => {
                    console.log(result);
                    resolve('New Student created');
                })
                .catch((err) => {
                    console.log(err);
                    reject('Error creating new student')
                });
        });
    }

    findByRegNumber(reg_number) {
        return new Promise((resolve, reject) => {
            Student
                .findOne({
                    where: {
                        registration_number: reg_number
                    }
                })
                .then(student => {
                    resolve(student.dataValues)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}

module.exports = StudentService;