const supertest = require('supertest');
const app = require('../../app');

module.exports = async (time, category, therapistId, hours, minutes, videoLink, ) => {
  const data = {
    time,
    category,
    therapistId,
    hours,
    minutes,
    videoLink,
  };

  const result = await supertest(app).post('/meeting').send(data)

  console.log(result.body);

  return result.body;
}