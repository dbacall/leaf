const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sundayLeagueTeamSchema = new Schema({
  name: String,
  league: {
    type: Schema.Types.ObjectId,
    ref: 'SundayLeague',
  },
});

sundayLeagueTeamSchema.virtual('players', {
  ref: 'SundayLeaguePlayer',
  localField: '_id',
  foreignField: 'team',
});

sundayLeagueTeamSchema.set('toObject', { virtuals: true });
sundayLeagueTeamSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('SundayLeagueTeam', sundayLeagueTeamSchema);
