const Dotenv = require('dotenv-webpack');
const env = process.env.NODE_ENV;

module.exports = {
  plugins: [
    new Dotenv({
      path: `./.env.${env === 'production' ? 'production' : 'development'}`,
    }),
  ],
};
