const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SundayLeague = require('./SundayLeague');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  sundayLeagues: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SundayLeague',
    },
  ],
});

module.exports = User = mongoose.model('users', userSchema);
