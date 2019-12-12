const TokenHandler = require('../utils/jwt.utils.js');

class AuthCheckerMiddleware {

    constructor () {
        this.tokenHandler = new TokenHandler();
        this.checkAuthentication = this.checkAuthentication.bind(this);
    }

    checkAuthentication(req, res, next) {
        try
        {
            const token = req.headers.authorization.split(' ')[ 1 ];
            const payload = this.tokenHandler.verifyToken(token);
            req.body.payload = payload;
            next();

        } catch (error)
        {
            console.log(error);
            return res.status(401).json({
                msg: 'Unauthorized Access!!!'
            })
        }
    }
}

module.exports = AuthCheckerMiddleware;