var express = require('express');
var router = express.Router();
var PhotoController = require('../controllers/PhotoController');
const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({ storage });

router.post('/', upload.single('photo'), PhotoController.create);
// router.get('/:id', PhotoController.all);

module.exports = router;