const express = require('express');
const AuthChecker = require('../middleware/authChecker.middleware.js');

class Route {
    constructor () {
        this.router = express.Router();
        this.authChecker = new AuthChecker();
    }
    
    getRouter() {
        console.log('inside getAdminRouter');
        return this.router;
    }
}

module.exports = Route;