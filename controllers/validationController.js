const db = require("../data/dbConfig");
const catchAsync = require('../utils/catchAsync');

exports.validateAnimalId = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const validId = await db('animals').where({ id }).first();

  if (!validId)
    return res.status(404).json({ message: "Animal does not exist" });

  req.validAnimalId = validId;
  next();
});
