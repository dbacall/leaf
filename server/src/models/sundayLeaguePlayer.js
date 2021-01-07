const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sundayLeaguePlayerSchema = new Schema({
  name: {
    type: String,
    match: [
      /[a-zA-Z]+\s+[a-zA-Z]+/g,
      'Player name must be a first and last name',
    ],
  },
  position: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: 'SundayLeagueTeam',
  },
});

module.exports = mongoose.model('SundayLeaguePlayer', sundayLeaguePlayerSchema);
