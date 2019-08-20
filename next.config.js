const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  webpack (config, options) {
    config.resolve.alias['react'] = path.join(__dirname, './node_modules/react'),
    config.resolve.alias['react-dom'] = path.join(__dirname, './node_modules/react-dom'),
    config.resolve.alias['@material-ui'] = path.join(__dirname, './node_modules/@material-ui')
    return config
  }
});