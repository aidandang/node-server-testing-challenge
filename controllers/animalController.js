const Animal = require('../models/animalModel');
const catchAsync = require('../utils/catchAsync');

exports.readAnimals = catchAsync(async (req, res, next) => {
  const animals = await Animal.find();

  res.status(200).json({
    status: 'success',
    animals
  })
})

exports.createAnimal = catchAsync(async (req, res, next) => {
  const newAnimal = await Animal.add(req.body);

  res.status(201).json({
    status: 'success',
    animal: newAnimal
  })
})

exports.readAnimalById = (req, res) => {
  const animal = req.validAnimalId;
  res.status(200).json({
    status: 'success',
    animal
  })
}

exports.deleteAnimal = catchAsync(async (req, res, next) => {
  const animal = req.validAnimalId;
  const result = await Animal.remove(req.params.id);
  
  res.status(200).json({
    status: 'success',
    animal
  })
})