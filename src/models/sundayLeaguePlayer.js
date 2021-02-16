const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sundayLeaguePlayerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name needs to be entered'],
    // match: [
    //   /[a-zA-Z]+\s+[a-zA-Z]+/g,
    //   'Player name must be a first and last name',
    // ],
  },
  surname: {
    type: String,
    required: [true, 'Surname needs to be entered'],
  },
  position: {
    type: String,
    enum: {
      values: ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'],
      message: 'Position must be goalkeeper, defender, midfielder or forward',
    },
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'SundayLeagueTeam',
  },
});

module.exports = mongoose.model('SundayLeaguePlayer', sundayLeaguePlayerSchema);
