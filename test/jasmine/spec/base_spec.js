describe('Silk Carousel', function() {
	var $carouselFixture;

	beforeEach(function() {
		$carouselFixture = $( readFixtures('carousel-fixture.html'));
		this.addMatchers({
			toBeInstanceOf : function( expected ) {
				return this.actual instanceof expected && this.actual.length > 0;
			},

			toBeA: function( expected ) {
				return typeof this.actual === expected;
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
		it("should be an available method", function() {
			expect($.fn.silkCarousel).toBeA('function');
		});

		it("should be chainable", function() {
			expect($carouselFixture.silkCarousel).toBeA('function');
		});

		it("should be able to iterate through a jquery Collection", function() {
			var $carouselInstances = $carouselFixture.filter('.silkCarousel');
			expect($carouselInstances.silkCarousel()).toBe($carouselInstances);
		});

		it("Sould have a defaut object", function() {
			var instance = Object.create(silkCarousel);
			expect(instance.defaults).toBeA( 'object' );
			expect(instance.defaults.size).toBe( 500 );
		});

		it("Default object should get overiden by config", function() {
			var instance = Object.create(silkCarousel);
			instance.init( $carouselFixture, { size : 1 });
			expect(instance.options).toBeA( 'object' );
			expect(instance.options.size).toBe(1);
		});
	});

	describe('DOM init', function() {
		var initialNumberOfSlide;
		var $slideWraper;
		beforeEach(function() {
			$slideWraper = $carouselFixture.find('.silkCarousel-slide-wrapper');
			initialNumberOfSlide = $slideWraper.children().length;
		});


		it('Should find the slides framed Viewport', function() {
			expect( $carouselFixture.find('.silkCarousel-frame') ).toBeInstanceOf( jQuery );
		});

		
		it('Should find the slides Wrapper', function() {
			expect( $slideWraper ).toBeInstanceOf( jQuery );
		});

		it("should find slides", function() {
			expect(initialNumberOfSlide).toBeGreaterThan(0);
		});

		it("should duplicate slides", function() {
			$carouselFixture.silkCarousel();
			expect(initialNumberOfSlide).toBeLessThan( $slideWraper.children().length );
		});


	});

});