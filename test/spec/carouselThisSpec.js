describe("carouselThis Jquery Plugin", function() {
	// Globals
	var carousel1Fix, carousel2Fix;

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
});