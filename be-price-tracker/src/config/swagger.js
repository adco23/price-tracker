const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Price Tracker',
    version: '1.0.0',
    description: 'Documentación de la API para gestionar productos, precios y lugares',
  },
  tags: [
    {
      name: 'Recursos',
      description: 'Operaciones relacionadas con recursos',
    },
    {
      name: 'Prices',
      description: 'Operaciones relacionadas con los precios de los productos',
    },
    {
      name: 'Products',
      description: 'Operaciones relacionadas con los productos',
    },
    {
      name: 'Places',
      description: 'Operaciones relacionadas con los lugares',
    },
  ],
  servers: [
    {
      url: 'http://localhost:8080/api',
      description: 'Servidor de desarrollo',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
