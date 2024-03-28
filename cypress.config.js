const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pnvmi',
  e2e: {
    baseUrl:'https://restful-booker.herokuapp.com',
    requestTimeout: 60l00,
    responseTimeout: 6000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
      requestMode: true,
      hideCredentials: true,
      username : 'admin',
      password : 'password123',
      auth_url: '/auth'
    }
  },
});
