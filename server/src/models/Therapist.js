const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TherapistSchema = new Schema({
  dateOfBirth: {
    type: Date,
    required: true,
  },
  yearsExperience: {
    type: Number,
    required: true,
  },
  categories: [{
    type: String,
    required: true,
    enum: ['mums', 'cheese addiction']
  }],
  phone: {
    type: Number,
    required: true,
  },
  photo: {
    type: String,
  },
});

TherapistSchema.virtual('user', {
  ref: 'users',
  localField: '_id',
  foreignField: 'therapistId',
});

TherapistSchema.set('toObject', { virtuals: true });
TherapistSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Therapist', TherapistSchema);