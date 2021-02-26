const { TokenExpiredError } = require('jsonwebtoken');
const { decodeToken } = require('../helpers/token');

const checkLoggedIn = (req, _res, next) => {
    try {
        const { token } = req.headers;
        if (token === undefined || token === null || token === '') {
            const err = new Error();
            err.message = 'token does not exist';
            err.status = 401;
            return next(err);
        }

        const decoded = decodeToken(String(token));

        if (!decoded) {
            const err = new Error();
            err.message = 'invalid token';
            err.status = 401;
            return next(err);
        }

        req.headers.decoded_token = Object(decoded);
        return next();
    } catch (err) {
        if (err instanceof TokenExpiredError) {
            const error = new Error();
            error.message = 'invalid token';
            error.status = 401;
            return next(error);
        }
        return next(err);
    }
};

module.exports = checkLoggedIn;
