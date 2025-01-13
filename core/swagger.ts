import swaggerJsdoc from 'swagger-jsdoc';


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My Express.js API',
            version: '1.0.0',
            description: 'A sample Express.js API built with TypeScript and Swagger',
        },
        /*servers: [
            {
                url: 'http://localhost:3001',
            },
        ],*/
    },
    apis: ['./routes/*.ts','./controllers/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs;