const Route = require('./route.routes.js');
const StudentController = require('../controller/student.controller.js');

class StudentRoute extends Route {

    constructor() {
        super();
        this.studentController = new StudentController();
        this.router.post('/', this.studentController.postNewStudent);
        this.router.get('/:reg_number', this.studentController.getInfoByRegNumber);
    }
}

module.exports = StudentRoute;