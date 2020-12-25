const Controller = require('./Controller');
const SundayLeagueService = require('../services/SundayLeagueService');
const SundayLeague = require('../models/SundayLeague');

const sundayLeagueService = new SundayLeagueService(SundayLeague);

class SundayLeagueController extends Controller {
  constructor(service) {
    super(service);
    this.getOwnedLeagues = this.getOwnedLeagues.bind(this);
  }

  async getOwnedLeagues(req, res) {
    let response = await this.service.getOwnedLeagues(req);
    if (response.error) return res.status(response.statusCode).send(response);
    return res.status(201).send(response);
  }
}

module.exports = new SundayLeagueController(sundayLeagueService);

// const SundayLeague = require('../models/SundayLeague');
// const User = require('../models/User');

// const SundayLeagueController = {
//   create: async (req, res) => {
//     var newSundayLeague = new SundayLeague({
//       leagueName: req.body.leagueName,
//       owner: req.body.owner,
//     });

//     await newSundayLeague
//       .save()
//       .then((league) => {
//         res.status(200).json({ success: true, league });
//       })
//       .catch(() => {
//         res.status(400).json({
//           success: false,
//           error: 'Sunday League could not be saved to database.',
//         });
//       });
//   },

//   getOwnedLeagues: async (req, res) => {
//     await SundayLeague.find({ owner: req.params.id }).then((leagues) => {
//       res.json(leagues);
//     });
//   },
// };

// module.exports = SundayLeagueController;
