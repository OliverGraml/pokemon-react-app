// PROJECT_ROOT/styleguide.config.js (bindet den StyleGuideWrapper in Styleguidist ein)

const path = require('path');
module.exports = {
  ignore: ['**/*.spec.js'],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/StyleGuideWrapper'),
  },
}; 
