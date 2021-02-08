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
    enum: ['Mums', 'Cheese Addiction']
  }],
  phone: {
    type: Number,
    required: true,
  },
});

TherapistSchema.virtual('user', {
  ref: 'users',
  localField: '_id',
  foreignField: 'therapistId',
});

TherapistSchema.virtual('photo', {
  ref: 'Photo',
  localField: '_id',
  foreignField: 'therapistId',
});

TherapistSchema.set('toObject', { virtuals: true });
TherapistSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Therapist', TherapistSchema);