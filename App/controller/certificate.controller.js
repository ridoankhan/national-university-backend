const CertificateService = require('../services/certificate.services.js');

class CertificateController {

    constructor() {
        this.certificateService = new CertificateService();

        this.create = this.create.bind(this);
        this.getbyRegNumber = this.getbyRegNumber.bind(this);
    }

    create(req, res, next) {
        this.certificateService
            .createCertificate(req)
            .then(response => {
                console.log(response);
                res.status(201).json({ msg: 'Certificate created successfully' });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ err: err });
            })
    }

    getbyRegNumber(req, res, next) {
        this.certificateService
            .findByRegNumber(req.params.reg_number)
            .then(response => {
                console.log(response);
                res.status(201).json(response);
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ err: err });
            })
    }

}

module.exports = CertificateController;