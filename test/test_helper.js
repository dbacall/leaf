const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
before(() => {
  process.env.NODE_ENV = 'test';
});

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  });
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
