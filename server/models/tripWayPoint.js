const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const tripWayPointSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  lon: {
    type: Number,
    required: true,
    min: -180,
    max: 180,
  },
  lat: {
    type: Number,
    required: true,
    min: -90,
    max: 90,
  },
});

// Apply the uniqueValidator plugin to the trackPointSchema
tripWayPointSchema.plugin(uniqueValidator);


const TripWayPoint = model('TripWayPoint', tripWayPointSchema);

module.exports = TripWayPoint;
