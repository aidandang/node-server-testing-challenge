const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.readUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    status: 'success',
    users
  })
})

exports.createUser = catchAsync(async (req, res, next) => {
  const newUser = await User.add(req.body);

  res.status(201).json({
    status: 'success',
    message: 'The user is created.'
  })
})

exports.readUserById = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    status: 'success',
    user
  })
})

exports.deleteUser = catchAsync(async (req, res, next) => {
  const result = await User.remove(req.params.id);
  
  res.status(204).json({
    status: 'success',
    message: 'The user has been removed.'
  })
})