const express = require('express');
const router = express.Router();
const TherapistController = require('../controllers/TherapistController');
const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post('/', upload.single('photo'), TherapistController.create);
router.get('/:id', TherapistController.getById);
router.get('/category/:category', TherapistController.getByCategory);

module.exports = router;