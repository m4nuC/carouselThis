describe('Silk Carousel', function() {
	var $carouselFixture;
	beforeEach(function() {
		$carouselFixture = $( readFixtures('carousel-fixture.html')) ;
	});

	describe("Initialization", function() {
		it("Find Jquery", function() {
			expect($).toBeDefined();
		});

		it("Find jasmine.jquery", function() {
			expect(readFixtures()).toBeDefined();
		});

		describe("Markup", function() {
			it("Find the Carousel Fixture", function() {
				expect($carouselFixture).toBeDefined();
			});
		});
	});

	describe("jQuery.silkCarousel Method", function() {
		it("should be available", function() {
			expect($.fn.silkCarousel).toBeDefined();
		});

		it("should be chainable", function() {
			expect($carouselFixture.silkCarousel()).toBe($carouselFixture);
		});

		it("should be able to iterate through a jquery Collection", function() {
			var $carouselInstances = $carouselFixture.filter('.silkCarousel');
			expect($carouselInstances.silkCarousel()).toBe($carouselInstances);
		});

		// it("Sould have a defaut object", function() {
		// exepct($carouselInstances.silkCarousel()).toBeDefined();
		// });
	});

	describe('DOM init', function() {
		it('Should find the slides framed Viewport', function() {
			expect( $carouselFixture.filter('.silkCarousel-frame') ).toBeDefined();
		});

		
		it('Should find the slides Wrapper', function() {
			expect( $carouselFixture.filter('.silkCarousel-slide-wrapper') ).toBeDefined();
		});
	});

});