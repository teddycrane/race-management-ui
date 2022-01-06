const babelJest = require('babel-jest');
const babelConfig = {
    presets: ['react-app'],
};

module.exports = babelJest.createTransformer(babelConfig);