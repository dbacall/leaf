const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TherapistSchema = new Schema({
  dateOfBirth: {
    type: Date,
    required: [true, 'You need to enter your date of birth.'],
  },
  yearsExperience: {
    type: [Number, 'Years of experience must be a number'],
    required: [true, 'Years of experience needs to be entered.'],
  },
  categories: {
    type: [
      {
        type: String,
        required: true,
        enum: ['Mums', 'Cheese Addiction'],
      },
    ],
    required: [true, 'You must select at least one category.'],
  },
  phone: {
    type: Number,
  },
  pricePerHour: {
    type: Number,
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
