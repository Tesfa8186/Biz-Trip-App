const db = require('../config/connection');
const { Profile } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const tripSeeds = require('./tripSeeds.json');
const tripWayPointSeeds = require('./tripWayPointSeeds.json');

db.once('open', async () => {
  try {
    await Profile.deleteMany({});
    await Profile.create(profileSeeds);
    await Profile.create(tripSeeds);
    await Profile.create(tripWayPointSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
