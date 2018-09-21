module.exports = (api, options, rootOptions) => {
    api.extendPackage({
      dependencies: {
      }
    });
  
    api.render(
      {
        "./src/plugins/feathers/index.js": "./templates/plugins/feathers/index.js",
        "./src/plugins/feathers/config.js": "./templates/plugins/feathers/config.js"
      },
      options
    );
  
    const fs = require("fs");
    const helpers = require('./helpers')(api)
  
    api.onCreateComplete(() => {
      helpers.updateMain(src => {
      });
    });
  };
  