import swaggerJsdoc from 'swagger-jsdoc';

const ulrApi=process.env.API || 'http://localhost:3001';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Express.js API',
            version: '1.0.0',
            description: 'A sample Express.js API built with TypeScript and Swagger',
        },
        servers: [
            {
                url: ulrApi,
            },
        ],
    },
    apis: ['./routes/*.ts','./controllers/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;