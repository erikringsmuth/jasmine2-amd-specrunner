/*global define, require*/
define([], function() {
  "use strict";

  // Shim jasmine. jasmine.js creates the `window.jasmineRequire` global. jasmine-html.js adds properties to that global.
  require.config({
    paths: {
      "jasmine": "lib/jasmine-2.0.0/jasmine",
      "jasmine-html": "lib/jasmine-2.0.0/jasmine-html"
    },
    shim: {
      "jasmine": {
        exports: "jasmineRequire"
      },
      "jasmine-html": {
        deps: ["jasmine"],
        exports: "jasmineRequire"
      }
    }
  });

  // List all of your specs here. They should be AMD modules.
  var specs = [
    "spec/amdSpec"
  ];

  // Load the HTML bootloader and all of the specs
  require(["amd/boot"].concat(specs), function (boot) {
    // All of the specs have been loaded. Initialize the HTML Reporter and execute the environment.
    boot.initializeHtmlReporter();
    boot.execute();
  });
});
