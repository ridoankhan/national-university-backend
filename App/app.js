const express = require('express');
const bodyParser = require('body-parser');
const RouteHandler = require('./routes/routes.js');
const DBConfigurator = require('./config/database.config.js');

class App {
    
    constructor () {
        this.appServer = express();
        this.router = new RouteHandler().getRouter();
        this.dbConfigurator = new DBConfigurator();
	}

    configure() {
        this.initDB();
        this.initBodyParser();
        this.initServerRoutes();
    }

    initDB() {
        this.dbConfigurator.configure();
    }
    
    initBodyParser() {
        this.appServer.use(bodyParser.json());
        this.appServer.use(bodyParser.urlencoded({ extended: false }));
    }

    initServerRoutes() {
        this.appServer.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
            }
            next();
        }); 

        this.appServer.use('/', this.router);
    }

    getAppServer() {
        return this.appServer;
    }
}

module.exports = App;
