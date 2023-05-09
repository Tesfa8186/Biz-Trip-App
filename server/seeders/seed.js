const db = require('../config/connection');
const { Profile, Trip, TripWayPoint } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const tripSeeds = require('./tripSeeds.json');
const tripWayPointSeeds = require('./tripWayPointSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Trip.deleteMany({});
    await TripWayPoint.deleteMany({});

    await Profile.create(profileSeeds);

    const seededTripWayPoints = await TripWayPoint.create(tripWayPointSeeds);
    console.log("tripWaypoints: " + seededTripWayPoints[0]);
    const updatedTripSeeds = tripSeeds.map((trip) => {
     
      trip.path = trip.path.map((value,index) => seededTripWayPoints[index]._id);

      return trip;
    });

    await Trip.create(updatedTripSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
