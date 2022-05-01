import express from 'express';
import cors from 'cors';
import { swaggerUi, specs } from './modules/swagger.js';
import { nutritionRouter } from './Routers/NutritionRouter.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// urlencoded.... body-parser deprecated undefined extended: provide extended option

// User, Recommend and other Services.

// swagger api
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {explorer: true }));

/**
 * @swagger
 * tags:
 *   name: Nutritions
 *   description: 음식 영양소 조회
 */
app.use(nutritionRouter);

export { app };