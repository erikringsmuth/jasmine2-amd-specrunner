/*global define*/
define([
  'jasmineAmd'
], function(jasmine) {
  'use strict';

  var describe = jasmine.describe,
      it = jasmine.it,
      expect = jasmine.expect;

  describe('Jasmine', function() {
    it('should be loaded using AMD', function() {
      expect(jasmine).toBeDefined();
    });
  });
});
