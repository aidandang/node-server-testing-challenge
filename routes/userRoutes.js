const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router
  .route('/')
  .get(userController.readUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.readUserById)
  .delete(userController.deleteUser);

module.exports = router;