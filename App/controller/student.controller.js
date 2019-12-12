const StudentService = require('../services/student.services.js');

class StudentController {

    constructor() {
        this.studentService = new StudentService();
        this.checkValidity = this.checkValidity.bind(this);
        this.postNewStudent = this.postNewStudent.bind(this);
        this.getInfoByRegNumber = this.getInfoByRegNumber.bind(this);
        this.getStudentByDepartmentId = this.getStudentByDepartmentId.bind(this);
    }

    postNewStudent(req, res, next) {
        this.studentService
            .createStudent(req)
            .then((msg) => {
                res.status(201).json({
                    msg: msg
                })
            }).catch((err_msg) => {
                res.status(500).json({
                    msg: err_msg
                })
            });
    }

    getStudentByDepartmentId(req, res, next) {
        this.studentService
            .findStudentByDeptId(req.params.department_id)
            .then((department_wise_student_list) => {
                res.status(201).json({
                    msg: 'List of students for specific department',
                    students: department_wise_student_list
                })
            })
            .catch((err_msg) => {
                res.status(500).json({
                    msg: err_msg
                })
            });
    }

    checkValidity(req, res, next) {
        this.studentService
            .findById(req.body.student_id)
            .then(student => {
                return this.studentService.verify(req, student.dataValues);
            })
            .then((response) => {
                res.status(201).json({ isValid: true })
            })
            .catch((err) => {
                res.status(201).json({ isValid: false })
            });
    }

    getInfoByRegNumber(req, res, next) {
        this.studentService
            .findByRegNumber(req.params.reg_number)
            .then(info => {
                res.status(201).json(info);
            })
            .catch(err => {
                res.status(500).json(err);
            })
    }
}

module.exports = StudentController;