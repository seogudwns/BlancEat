import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
	swaggerDefinition: {
		openapi: '3.0.0',
		info: {
			title: 'elice data project',
			version: '1.0.0',
			description: 'A REST API using swagger and express.',
		},
		servers: [
			{
				url: 'http://localhost:4040',
			},
		],
	},
	apis: [],
};

const specs = swaggerJsdoc(options);

module.exports = {
	swaggerUi,
	specs,
};
