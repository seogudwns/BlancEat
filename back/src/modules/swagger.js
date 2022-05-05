import path from 'path';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const __dirname = path.resolve();
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
				description: 'localhost',
				url: 'http://localhost:5000',
			},
		],
	},
	apis: [
		`./src/modules/elice4th10-Elice_team10-1.0.0-swagger.yaml`,
		`./src/index.js`,
		'./src/modules/User.yaml',
	],
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };
