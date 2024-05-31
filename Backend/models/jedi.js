const mongoose = require('mongoose');

const jediSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rank: {
    type: String,
    enum: ['Padawan', 'Knight', 'Master'],
    required: true
  },
  age: {
    type: Number
  },
  lightsaber: {
    color: {
      type: String
    },
    bladeLength: {
      type: Number
    }
  },
  master: {
    type: String
  },
  photoUrl: {
    type: String
  }
});


module.exports = mongoose.model('Jedi', jediSchema);
