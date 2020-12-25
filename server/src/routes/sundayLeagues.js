const express = require('express');
const router = express.Router();
const SundayLeagueController = require('../controllers/SundayLeagueController');

router.post('/new', SundayLeagueController.create);
router.get('/:id', SundayLeagueController.getOwnedLeagues);

module.exports = router;
