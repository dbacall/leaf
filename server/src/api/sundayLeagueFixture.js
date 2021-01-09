const express = require('express');
const router = express.Router();
const sundayLeagueFixtureController = require('../controllers/sundayLeagueFixtureController');

router.post('/', sundayLeagueFixtureController.create);
// router.get('/', sundayLeagueFixtureController.get);
// router.get('/:id/:idType', sundayLeagueGameweekController.getAllById);

module.exports = router;
