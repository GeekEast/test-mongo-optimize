const mongoose = require('mongoose');
const casual = require('casual');
const { User, UserWithIndex } = require('./schema/user');

const init = (count) => {
  for (let i = 0; i < count; i++) {
    User.create({
      name: casual.name,
      email: casual.email,
      age: casual.integer((from = 1), (to = 100)),
      details: casual.description,
      birthDate: casual.date((format = 'YYYY-MM-DD')),
      favoriteFruit: casual.word,
    });
    UserWithIndex.create({
      name: casual.name,
      email: casual.email,
      age: casual.integer((from = 1), (to = 100)),
      details: casual.description,
      birthDate: casual.date((format = 'YYYY-MM-DD')),
      favoriteFruit: casual.word,
    });
  }
};

(async () => {
    try {
      await mongoose.connect(
        'mongodb://readandwrite:readandwrite@localhost:27017/firstdb',
        {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        }
      );
      init(10000);
    } catch (err) {
      console.error(err);
    }
  })();
