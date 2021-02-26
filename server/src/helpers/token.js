const jwt = require('jsonwebtoken');
const config = require('../config');

if (!config.jwtSecret) {
    throw new Error('JWT secret does not exist');
}

const secret = config.jwtSecret;

export const encodeToken = (details) => jwt.sign(details, secret, { expiresIn: '24h' });

export const decodeToken = (token) => jwt.verify(token, secret);
