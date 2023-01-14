const { defineConfig } = require('cypress')

module.exports = defineConfig({
  ensureScrollable: false,
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: './cypress/integration/*.feature',
    baseUrl: 'https://www.amazon.com.br'
  },
})

