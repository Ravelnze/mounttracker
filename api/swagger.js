const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    apis: [
        './controllers/*.js', // route definitions
        './models/*.js'       // model definitions
    ],
    basePath: '/',
    swaggerDefinition: {
        info: {
            description: 'Mount Tracker API',
            title: 'MountTracker API',
            version: '1.0.0',
        },
    },
};
const specs = swaggerJsdoc(options);

module.exports = specs;