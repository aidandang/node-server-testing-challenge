const db = require('../data/dbConfig');

module.exports = {
  find,
  findById,
  add,
  remove
}

function find() {
  return db('animals');
}

function findById(id) {
  return db('animals').where({ id }).first();
}

async function add(animal) {
  const [id] = await db('animals').insert(animal);
  return await db('animals').where({ id }).first();
}

function remove(id) {
  return db('animals').where({ id }).del();
}