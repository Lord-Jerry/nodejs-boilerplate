const { Router } = require('express');

const ApiRoutes = () => {
    const route = Router();

    route.get('/health-check', (_req, res) =>
        res.status(200).json({
            message: 'hello fucking world',
        }),
    );

    return route;
};

module.exports = ApiRoutes;
