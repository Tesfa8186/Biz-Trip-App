const { Schema, model } = require('mongoose');

const tripWayPointSchema = new Schema({
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

const TripWayPoint = model('TripWayPoint', tripWayPointSchema);

module.exports = TripWayPoint;
