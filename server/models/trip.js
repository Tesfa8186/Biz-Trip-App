const { Schema, model } = require('mongoose');

const tripSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  fromDateTime: {
    type: Date,
    required: true,
  },
  toDateTime: {
    type: Date,
    required: true,
  },
  path: [
    {
      type: Schema.Types.ObjectId,
      ref: 'TripWayPoint',
    },
  ],
  managerName: {
    type: String,
    required: true,
  },
  approved: {
    type: Boolean,
    required: true,
  },
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;
