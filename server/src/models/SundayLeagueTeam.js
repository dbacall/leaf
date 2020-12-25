const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sundayLeagueTeamSchema = new Schema({
  teamName: String,
  league: {
    type: Schema.Types.ObjectId,
    ref: 'SundayLeague',
  },
});

module.exports = mongoose.model('SundayLeagueTeam', sundayLeagueTeamSchema);
