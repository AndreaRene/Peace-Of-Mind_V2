const db = require('../config/connection');
const { User, Feeling } = require('../models');
const userSeeds = require('./userSeeds.json');
const feelingSeeds = require('./feelingSeeds.json');
const commentSeeds = require('./commentSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Feeling.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < feelingSeeds.length; i++) {
      const { _id, feelingAuthor } = await Feeling.create(feelingSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: feelingAuthor },
        {
          $addToSet: {
            feelings: _id,
          },
        },
      );
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
