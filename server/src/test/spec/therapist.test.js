const expect = require('chai').expect;
const Therapist = require('./../../models/Therapist')
const supertest = require('supertest');
const app = require('../../app');

describe('Login', () => {
  it('should add a therapist', async () => {
    await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const dateOfBirth = new Date(1993, 03, 02);

    const therapist = await addTherapist(
      dateOfBirth,
      5,
      ['mums', 'cheese addiction'],
      07816449949,
    );

    const data = await Therapist.findOne({ _id: therapist.data.id })

    expect(data.yearsExperience).to.equal(5);
    expect(data.phone).to.equal(7816449949);
  });

  it('should get therapists from a specific category with user populated', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const dateOfBirth = new Date(1993, 03, 02);

    const therapist = await addTherapist(
      dateOfBirth,
      5,
      ['mums', 'cheese addiction'],
      07816449949,
    );

    await supertest(app).put(`/users/${user.data.id}`).send({ therapistId: therapist.data.id })

    const data = await supertest(app).get('/therapist/category/mums')

    expect(data.body).to.be.length(1)
    expect(data.body[0].yearsExperience).to.equal(5);
    expect(data.body[0].phone).to.equal(7816449949);
    expect(data.body[0].user).to.exist
  });

  it('should get a specific therapist', async () => {
    const user = await registerUser(
      'David',
      'Bacall',
      'dbacall@hotmail.co.uk',
      'password',
      'password'
    );

    const dateOfBirth = new Date(1993, 03, 02);

    const therapist = await addTherapist(
      dateOfBirth,
      5,
      ['mums', 'cheese addiction'],
      07816449949,
    );

    const data = await supertest(app).get(`/therapist/${therapist.data.id}`)

    expect(data.body.yearsExperience).to.equal(5);
    expect(data.body.phone).to.equal(7816449949);

  })
})