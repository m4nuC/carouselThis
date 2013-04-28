/**
 * SilkCarousel - jquery Plugin
 * Emmanuel Chappat m4nu.co
 *
*/

;(function( $, window, document, undefined ){

	// Using revealing pattern to avoid building a big object literal
	var carouselThis = function() {

	};

	jQuery.fn.carouselThis = function( config ){
		var instance = Object.create( carouselThis );
		return this.each(function() {
			instance.init(this, config);
		});
	};

	// Make the class available on namespace
	jQuery.fn.carouselThis.Class = carouselThis;

}( jQuery, window, document ));