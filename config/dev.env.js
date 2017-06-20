var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  DEUB_MODE: true,
  API_KEY: '112c3fefe86e42438b0c2297ecbc45fd'
})
