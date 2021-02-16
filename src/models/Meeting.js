const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  time: {
    type: Date,
    required: [true, 'You need to enter a date and time for the meeting.'],
  },
  category: {
    type: String,
    required: [true, 'You need to select a category'],
    enum: ['Mums', 'Cheese Addiction'],
  },
  therapistId: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: [true, 'You must enter hours, enter 0 if under an hour'],
  },
  minutes: {
    type: Number,
    required: [true, 'You must enter minutes, enter 0 if necessary'],
  },
  videoLink: {
    type: String,
    required: [true, 'You need to provide a video link'],
  },
});

module.exports = mongoose.model('Meeting', MeetingSchema);
