var expect = require('chai').expect;

var mergesort = require('../');

describe('mergesort', function() {
   it('should perform a mergesort', function() {
	expect(mergesort([5,4,3,2])).to.eql([2,3,4,5]);
   });
})
