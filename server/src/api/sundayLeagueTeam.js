const express = require('express');
const router = express.Router();
const sundayLeagueTeamController = require('../controllers/SundayLeagueTeamController');

router.post('/', sundayLeagueTeamController.create);

module.exports = router;
