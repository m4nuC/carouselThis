describe('Silk Carousel', function() {
	var $carouselFixture;

	beforeEach(function() {
		$carouselFixture = $( readFixtures('carousel-fixture.html'));
		this.addMatchers({
			toBeInstanceOf : function( expected ) {
				return this.actual instanceof expected && this.actual.length > 0;
			}
		});
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
		var initialNumberOfSlide;
		var $slideWraper;
		it('Should find the slides framed Viewport', function() {
			expect( $carouselFixture.find('.silkCarousel-frame') ).toBeInstanceOf( jQuery );
		});

		
		it('Should find the slides Wrapper', function() {
			$slideWraper = $carouselFixture.find('.silkCarousel-slide-wrapper');
			expect( $slideWraper ).toBeInstanceOf( jQuery );
			console.log($slideWraper);
		});

		it("should find slides", function() {
			console.log($slideWraper);
			initialNumberOfSlide = $slideWraper.children().length;
			expect(initialNumberOfSlide).toBeGreaterThan(0);
		});
	});

});