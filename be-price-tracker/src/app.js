const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger');
const morgan = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.status(200).send({ message: '👋 Hello welcome to my API' }));
app.use('/api', routes);
app.use(errorMiddleware);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

module.exports = app;
