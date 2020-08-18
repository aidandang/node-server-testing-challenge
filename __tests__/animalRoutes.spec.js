const request = require('supertest');
const server = require("../api/server");
const db = require("../data/dbConfig");

describe("animal routes", () => {
  beforeEach(async () => {
    await db.seed.run();
  });

  it("GET /api/v1/animals", async () => {
    const response = await request(server).get('/api/v1/animals');
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.animals).toHaveLength(2);
  });

  it("POST /api/v1/animals", async () => {
    const animal = { name: "Leo", species: "Lion", age: 3 };
    const response = await request(server).post('/api/v1/animals').send(animal);
    expect(response.status).toBe(201);
    expect(response.body.animal.id).toBeDefined();
    expect(response.body.animal.name).toBe("Leo");
    expect(response.body.animal.species).toBe("Lion");
    expect(response.body.animal.age).toBe(3);
  });
});
