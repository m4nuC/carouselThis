describe('Silk Carousel', function() {
	var frag;
	beforeEach(function() {
		frag = $( readFixtures('frag.html')) ;
		console.log(frag);
	});

	describe("Initialization", function() {
		it("Find Jquery", function() {
			expect($).toBeDefined();
		});

		it("Find jasmine.jquery", function() {
			expect(readFixtures()).toBeDefined();
		});		

		describe("fixturea", function() {
			it("Find the frag.html fixture", function() {
				expect(frag).toBeDefined();
			});	

			it("Find find a 'P' tag within frag fixture", function() {
				expect(frag.find('p')).toBeDefined();
			});	
		});
	});

	describe("jQuery.silkCarousel Method", function() {
		it("should be available", function() {
			expect($.fn.silkCarousel).toBeDefined();
		});

		it("should be chainable", function() {
			expect(frag.silkCarousel()).toBe(frag);
		});
	});
});

