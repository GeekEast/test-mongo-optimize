const mongoose = require('mongoose');
const { User, UserWithIndex } = require('./schema/user');


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

    const query = { age: { $gt: 22 } };
    // const query = { favoriteFruit: 'potato' }

    console.time('query');
    await User.find(query);
    console.timeEnd('query');

    console.time('query_with_index');
    await UserWithIndex.find(query);
    console.timeEnd('query_with_index');

    console.time('query_with_select');
    await User.find(query).select({ name: 1, _id: 1, age: 1, email: 1 });
    console.timeEnd('query_with_select');

    console.time('query_with_select_index');
    await UserWithIndex.find(query).select({
      name: 1,
      _id: 1,
      age: 1,
      email: 1,
    });
    console.timeEnd('query_with_select_index');

    console.time('lean_query');
    await User.find(query).lean();
    console.timeEnd('lean_query');

    console.time('lean_with_index');
    await UserWithIndex.find(query).lean();
    console.timeEnd('lean_with_index');

    console.time('lean_with_select');
    await User.find(query).select({ name: 1, _id: 1, age: 1, email: 1 }).lean();
    console.timeEnd('lean_with_select');

    console.time('lean_select_index');
    await UserWithIndex.find(query)
      .select({ name: 1, _id: 1, age: 1, email: 1 })
      .lean();
    console.timeEnd('lean_select_index');
    process.exit(0);
  } catch (err) {
    console.error(err);
  }
})();
