/*global define*/
define([
  "jasmineAmd"
], function(jasmine) {
  "use strict";

  var env = jasmine.getEnv(),
      describe = env.describe,
      it =  env.it,
      expect = env.expect;

  describe("jasmine", function() {
    it("should be loaded using AMD", function() {
      expect(jasmine).toBeDefined();
    });
  });
});
