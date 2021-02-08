const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MeetingSchema = new Schema({
  time: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Mums', 'Cheese Addiction']
  },
  therapistId: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  minutes: {
    type: Number,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Meeting', MeetingSchema);