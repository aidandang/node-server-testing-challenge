exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').del()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        { name: 'Coco', species: 'Dog', age: 2.5 },
        { name: 'Lucy', species: 'Cat', age: 1 }
      ]);
    });
};
