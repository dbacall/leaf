const express = require('express');
const router = express.Router();
const sundayLeagueSeasonController = require('../controllers/sundayLeagueSeasonController');

router.post('/', sundayLeagueSeasonController.create);
router.get('/', sundayLeagueSeasonController.getCurrentSeason);
// router.get('/:id/:idType', sundayLeagueSeasonController.getAllById);

module.exports = router;
