const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  photo: {
    type: String,
  },
  therapistId: {
    type: Schema.Types.ObjectId,
    ref: 'Therapist',
  },
});

var Photo = mongoose.model('Photo', PhotoSchema);

module.exports = Photo;