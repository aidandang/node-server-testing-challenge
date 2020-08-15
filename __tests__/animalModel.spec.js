const db = require('../data/dbConfig');
const Animal = require('../models/animalModel');

describe('animal model', () => {
  describe('insert', () => {
    beforeEach(async () => {
      await db('animals').truncate();
    })

    it('should insert the provided animal into the db', async () => {
      await Animal.add({ name: "Hunter", species: "Cat", age: 5 });
      const animals = await db('animals');
      expect(animals).toHaveLength(1);
    })

    it('should return the animal we inserted', async () => {
      let animal = await Animal.add({ name: "Leo", species: "Cat", age: 3 })
      expect(animal.name).toBe('Leo');
    })

    it('do nothing but clean up the database', () => {
      expect(true).toBe(true);
    })
  })
})