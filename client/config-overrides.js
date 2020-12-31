module.exports = {
  webpack: function (config, env) {
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push(
      // Apply loader
      {
        test: /\.scss$/,
        use: [
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              // Provide path to the file with resources
              resources: './src/sass/app.scss',
            },
          },
        ],
      }
    );
    return config;
  },
};
