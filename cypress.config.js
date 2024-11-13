const { defineConfig } = require('cypress')
module.exports = {
  // ...rest of the Cypress project config
  projectId: "3my7m9",

  e2e: {
    specPattern: 'cypress/integration/**/*.js',  // 可以改成你实际的文件后缀
  },
};
