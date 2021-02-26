module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: 'db',
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    staging: {
        client: 'postgresql',
        connection: {
            connection: {
                database: process.env.POSTGRES_DB,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
            },
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            connection: {
                database: process.env.POSTGRES_DB,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
            },
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};
