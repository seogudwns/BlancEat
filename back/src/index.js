import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// urlencoded.... body-parser deprecated undefined extended: provide extended option

// User, Recommend and other Services.

export { app };
