const Route = require('./route.routes.js');
const CertificateController = require('../controller/certificate.controller.js');

class CertificateRouter extends Route {

    constructor() {
        super();
        this.certificateController = new CertificateController();

        this.router.post('/', this.certificateController.create);
        this.router.get('/:reg_number', this.certificateController.getbyRegNumber);
    }
}

module.exports = CertificateRouter;