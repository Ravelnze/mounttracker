const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    apis: ['./controllers/*.js'],
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