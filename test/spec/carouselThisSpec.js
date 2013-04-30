describe("carouselThis Jquery Plugin", function() {

	// Environment Tests
	it("jQuery should be available", function() {
		expect(jQuery).toBeDefined();
		// @TODO check for a minimal version of jquery
	});

	it("carouselThis should be available on jQuery.fn", function() {
		expect(jQuery.fn.carouselThis).toBeDefined();
	});

	it("carouselThis should expose it's \"Factory Class\"", function() {
		expect(jQuery.fn.carouselThis.Class).toBeDefined();
	});

	it("Jasmine jQuery should be around", function() {
		expect(loadFixtures).toBeA('Function');
	});

	// DOM tests
	describe("DOM init", function() {
		// Globals
		var fix, $carousel1;

		beforeEach(function() {
			fix = readFixtures('carouselFixture.html');
			$carousel1 = $(fix).filter('#carousel1');
		});

		it("Should be able to read a fixture", function() {
			expect(fix).toBeDefined();
		});

		it("Should find carousel markup", function() {

			// @TODO find second carousel
			expect($carousel1).toBeDefined();
		});

		it("Should find carousel markup", function() {
			expect($carousel1).toBeDefined();
		});

		// Initiating the plug-in 
		describe('Plugin init', function() {
			it("Should be chainable", function() {
				expect($carousel1.carouselThis()).toEqual($carousel1);
			});

			it("Should have a defaults object", function() {
				console.log(jQuery.fn.carouselThis.Class);
				expect(jQuery.fn.carouselThis.Class.defaults).toBeDefined();
			});

			// it("Should take in an option object as parameter", function() {
			// 	var options = { 'dummyValue': 1 };
			// 	expect($carousel1.carouselThis(sandbox())).toHaveId('sandbox');
			// });
		});



	});
});