const expect = require('chai').expect;
const supertest = require('supertest');
const app = require('../../app');
const Meeting = require('../../models/Meeting')

describe('Login', () => {
  it.only('should add a meeting', async () => {
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

    console.log(data);

    expect(data.category).to.equal('mums');
    expect(data.therapistId).to.equal(therapist.data.id);
  });
})