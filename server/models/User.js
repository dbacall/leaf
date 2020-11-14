const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
});

userSchema.virtual('sundayLeaguesOwned', {
  ref: 'SundayLeague', //The Model to use
  localField: '_id', //Find in Model, where localField
  foreignField: 'owner', // is equal to foreignField
});

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

module.exports = User = mongoose.model('users', userSchema);
