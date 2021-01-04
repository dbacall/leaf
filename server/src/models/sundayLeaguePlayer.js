const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sundayLeaguePlayerSchema = new Schema({
  name: String,
  position: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: 'SundayLeagueTeam',
  },
});

module.exports = mongoose.model('SundayLeaguePlayer', sundayLeaguePlayerSchema);
