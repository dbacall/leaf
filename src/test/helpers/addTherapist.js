const supertest = require('supertest');
const app = require('../../app');

module.exports = async (dateOfBirth, yearsExperience, categories, phone) => {
  const data = {
    dateOfBirth,
    yearsExperience,
    categories,
    phone
  };

  const result = await supertest(app).post('/therapist').send(data)

  return result.body;
}