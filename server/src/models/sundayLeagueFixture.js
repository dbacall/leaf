const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sundayLeagueFixtureSchema = new Schema({
  team1: {
    type: mongoose.ObjectId,
  },
  team2: {
    type: mongoose.ObjectId,
  },
  team1Goals: {
    type: Number,
    default: 0,
  },
  team2Goals: {
    type: Number,
    default: 0,
  },
  winner: {
    type: mongoose.ObjectId,
  },
  draw: {
    type: Boolean,
    default: false,
  },
  finished: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
  },
  gameweek: {
    type: Schema.Types.ObjectId,
    ref: 'SundayLeagueGameweek',
  },
});

module.exports = mongoose.model(
  'SundayLeagueFixture',
  sundayLeagueFixtureSchema
);
