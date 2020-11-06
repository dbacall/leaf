const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// before((done) => {
//   mongoose.connection.close(() => {
//     console.log('Test database connection closed');
//   });
//   mongoose.connect(
//     'mongodb+srv://dbacall:fsl20@cluster0.vekgo.mongodb.net/fantasy-sunday-league-test?retryWrites=true&w=majority'
//   );
//   mongoose.connection
//     .once('open', () => console.log('Connected to test database!'), done())
//     .on('error', (error) => {
//       console.warn('Error: ', error);
//     });
// });

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
