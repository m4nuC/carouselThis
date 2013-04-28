beforeEach(function() {
	jasmine.Matchers.prototype.toBeA = function( expected ) {
		return typeof this.actual === expected;
	};

});