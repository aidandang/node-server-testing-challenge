const express = require('express');
const animalController = require('../controllers/animalController');
const validationController = require('../controllers/validationController');

const router = express.Router();

router
  .route('/')
  .get(animalController.readAnimals)
  .post(animalController.createAnimal);

router
  .route('/:id')
  .get(validationController.validateAnimalId, animalController.readAnimalById)
  .delete(validationController.validateAnimalId, animalController.deleteAnimal);

module.exports = router;