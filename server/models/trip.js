const { Schema, model } = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const tripSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
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

// Apply the uniqueValidator plugin to the tripSchema
tripSchema.plugin(uniqueValidator);

const Trip = model('Trip', tripSchema);

module.exports = Trip;
