const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

beforeEach(async () => {
  await mongoose.connection.collections.users.drop(() => {});
  await mongoose.connection.collections.sundayleagues.drop(() => {});
});

// afterEach((done) => {
//   mongoose.connection.collections.users.drop(() => {
//     done();
//   });
// });

after(() => {
  mongoose.connection.close(() => {
    console.log('Test database connection closed');
  });
});
