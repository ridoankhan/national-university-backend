const Router = require('./route.routes.js');

const StudentRouter = require('./student.routes.js');
const CertificateRouter = require('./certificate.routes.js');


class RouteHandler extends Router {

    constructor() {
        super();
        this.setRouters = this.setRouters.bind(this);
        this.configureRouter = this.configureRouter.bind(this);
        this.setRouters();
        this.configureRouter();
    }

    configureRouter() {

        this.router.use('/student', this.studentRouter);
        this.router.use('/certificate', this.certificateRouter);

        this.router.use((req, res) => {
            res.status(404).json({
                msg: 'no route found'
            });
        });
    }

    setRouters() {
        this.studentRouter = new StudentRouter().getRouter();
        this.certificateRouter = new CertificateRouter().getRouter();
    }

}

module.exports = RouteHandler;