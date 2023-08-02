const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['styles'] = path.join(__dirname, 'styles');
    return config;
  },
};
