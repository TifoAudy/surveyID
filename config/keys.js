if (process.env.NODE_ENV === 'production') {
  //on production
  module.exports = require('./prod');
} else {
  //on development
  module.exports = require('./dev');
}