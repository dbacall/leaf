const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');
const Meeting = require('../../models/Meeting')

describe('Login', () => {
  it('should add a meeting', async () => {
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

    const meetingDate = new Date(2021, 02, 24, 15, 00, 00, 0);

    await addMeeting(
      meetingDate,
      'mums',
      therapist.data.id,
      1,
      30,
      'linkylink',
    )

    const data = await Meeting.findOne({ therapistId: therapist.data.id })

    expect(data.category).to.equal('mums');
    expect(data.therapistId).to.equal(therapist.data.id);
  });

  it('should get all meetings based on category and therapist id', async () => {
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

    const meetingDate = new Date(2021, 02, 24, 15, 00, 00, 0);

    await addMeeting(
      meetingDate,
      'mums',
      therapist.data.id,
      1,
      30,
      'linkylink',
    )

    await addMeeting(
      meetingDate,
      'cheese addiction',
      therapist.data.id,
      1,
      30,
      'linkylink',
    )

    const data = await supertest(app).get(`/meeting/${therapist.data.id}/mums`)

    expect(data.body).to.be.length(1)
    expect(data.body[0].therapistId).to.equal(therapist.data.id);
  });
})