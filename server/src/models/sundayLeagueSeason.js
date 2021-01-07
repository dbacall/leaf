const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sundayLeagueSeasonSchema = new Schema({
  number: {
    type: Number,
  },
  yearFrom: {
    type: Number,
  },
  yearTo: {
    type: Number,
  },
  currentSeason: {
    type: Boolean,
    default: true,
  },
  league: {
    type: Schema.Types.ObjectId,
    ref: 'SundayLeague',
  },
});

module.exports = mongoose.model('SundayLeagueSeason', sundayLeagueSeasonSchema);
