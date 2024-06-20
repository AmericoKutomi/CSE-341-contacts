const routes = require('express').Router();

const swaggerUi = require('swagger-ui-express');

const contactsRoutes = require('./contacts.route');

routes.use('/', require('./swagger'));

routes.use('/contacts', contactsRoutes);

module.exports = routes;
