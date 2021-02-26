const dotenv = require('dotenv');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

module.exports = {
    /**
     * Your favorite port
     */
    port: process.env.PORT,

    /**
     * That long string from mlab
     */
    db: {
        database: process.env.POSTGRES_DB,
        user: process.env.POSTGRES_USER,
        pass: process.env.POSTGRES_PASSWORD,
    },

    /**
     * Your secret sauce
     */
    jwtSecret: process.env.JWT_SECRET,
    jwtAlgorithm: process.env.JWT_ALGO,

    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },

    //   agenda: {
    //     dbCollection: process.env.AGENDA_DB_COLLECTION,
    //     pooltime: process.env.AGENDA_POOL_TIME,
    //     concurrency: parseInt(process.env.AGENDA_CONCURRENCY, 10),
    //   },

    /**
     * Agendash config
     */
    //   agendash: {
    //     user: 'agendash',
    //     password: '123456'
    //   },
    /**
     * API configs
     */
    api: {
        prefix: '/api/v1',
    },
    /**
     * Mailgun email credentials
     */
    //   emails: {
    //     apiKey: process.env.MAILGUN_API_KEY,
    //     domain: process.env.MAILGUN_DOMAIN
    //   }
};
