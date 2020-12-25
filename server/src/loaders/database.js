const mongoose = require('mongoose');

module.exports = () => {
  // set up database connection

  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      process.env.ENV_FILE === 'test'
        ? console.log('Test MongoDB successfully connected')
        : console.log('MongoDB successfully connected');
    })
    .catch((err) => console.log(err));
};
