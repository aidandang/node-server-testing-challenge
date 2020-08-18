const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const animalRouter = require('../routes/animalRoutes');
const errorController = require('../controllers/errorController');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('tiny'));

server.use('/api/v1/users', (req, res) => {
  res.json({ route: '/api/v1/users' })
})

server.use('/api/v1/animals', animalRouter);

// the root route or no routes found
server.use('/', (req, res) => {
  res.json({ message: 'Web API:Node Sprint.' })
});

// global error controller
server.use("/", errorController);

module.exports = server;