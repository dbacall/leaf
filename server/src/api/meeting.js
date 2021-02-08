const express = require('express');
const router = express.Router();
const MeetingController = require('../controllers/MeetingController');

router.post('/', MeetingController.create);
// router.get('/:id', MeetingController.getById);
// router.get('/category/:category', MeetingController.getByCategory);

module.exports = router;