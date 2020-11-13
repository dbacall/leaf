const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sundayLeagueSchema = new Schema({
  leagueName: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SundayLeagueTeam',
    },
  ],
});

module.exports = mongoose.model('SundayLeague', sundayLeagueSchema);
