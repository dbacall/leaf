const express = require('express');
const router = express.Router();
const MeetingController = require('../controllers/MeetingController');

router.post('/', MeetingController.create);
router.get('/:therapistId/:category', MeetingController.getByCategory);
// router.get('/category/:category', MeetingController.getByCategory);

module.exports = router;