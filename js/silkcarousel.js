/**
 * SilkCarousel - jquery Plugin
 * 2011 2013 Silk Interactive Limited
*/
(function( $, window, document, undefined ){

	var silkCarousel = {
		defaults : {
				type : 'normal', // normal, fluid, responsive
				size : 500,
				easing : "normal",
				speed : 500,
				autoDelay : 500
			},

			_init : function(el, options){
				this.el = el;
				this.$el = $(el);
				this.winSize = $(window).width();
				this.options = $.extend({}, this.defaults, options );
				this._build();
			},

			_build: function() {

			}
	};

	jQuery.fn.silkCarousel = function(options){
		var instance = Object.create(silkCarousel);
		return this.each(function() {
			instance._init(this, options);
		});
	};

}( jQuery, window, document, undefined ));