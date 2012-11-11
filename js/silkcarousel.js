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

			init : function(el, options){
				this.el = el;
				this.$el = $(el);
				this.winSize = $(window).width();
				this.options = $.extend({}, this.defaults, options );
				this.$frame = this.$el.find('.silkCarousel-frame');
				this.$slideWrap = this.$frame.find('.silkCarousel-slide-wrapper');
				this.$slidesCollec = this.$slideWrap.children();
				this._initDOM();
			},
			/* Initialize the DOM.
			** The goal here is to make all DOM maniputalion on Init and dont touch the DOM again after that
			**
			*/

			_initDOM : function(el, options){
				// Duplicate the whole collection to the left and then the first slide to the right.
				// We could only duplicate the first and last but then we have to set 2 "reset" trigger on the first and last elemenst
				// Where we juse need to set that trigger on the first one here
				this.$slidesCollec = this.$slidesCollec.clone()
											.appendTo(this.$slideWrap)
												.eq(0).clone()
													.appendTo(this.$slideWrap)
														.siblings();
			},

			_build: function() {
				
			}
	};

	jQuery.fn.silkCarousel = function(options){
		var instance = Object.create(silkCarousel);
		return this.each(function() {
			instance.init(this, options);
		});
	};

}( jQuery, window, document, undefined ));