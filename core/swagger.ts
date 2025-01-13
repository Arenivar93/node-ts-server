import swaggerJsdoc from 'swagger-jsdoc';

const ulrApi=process.env.API || 'http://localhost:3001';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'People Management API',
            version: '1.0.0',
            description: 'A RESTful API for managing people data, with endpoints to add, update, sort, and filter records. Built with Express.js, TypeScript, and Swagger.',
        },
        /*servers: [
            {
                url: ulrApi,
            },
        ],*/
    },
    apis: ['./routes/*.ts','./controllers/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;