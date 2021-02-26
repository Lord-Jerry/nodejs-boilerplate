const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const config = require('../config');
const logger = require('../helpers/logger');
const routes = require('./routes');

const apiLoader = (app) => {
    app.enable('trust proxy');
    app.use(cors());
    app.use(express.json());
    app.use(morgan('dev'));

    app.use(config.api.prefix, routes());

    // catch 404 errors
    app.use((_req, _res, next) => {
        const err = new Error();
        err.status = 404;
        err.message = 'Enpoint not found';
        next(err);
    });

    // custom error handler
    app.use((err, _req, res, _next) => {
        const status = err.status || 500;
        const message = err.status ? err.message : 'Internal server error';

        logger.error(!err.status ? err.stack : err);

        return res.status(status).json({
            message,
            status,
        });
    });
};

module.exports = apiLoader;
