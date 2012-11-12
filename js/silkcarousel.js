/**
 * SilkCarousel - jquery Plugin
 * 2011 2013 Silk Interactive Limited
*/
(function( $, window, document, undefined ){

	var silkCarousel = {
		defaults : {
				type : 'normal', // normal, fluid, responsive
				size : 500,
				easingMethod : "normal",
				tansitionSpeed : 500,
				switchDelay : 2000,
				previousNextButtons : false,
				navigationStyle : 'thumbnails'
			},

			init : function(el, config){
				this.el = el;
				this.$el = $(el);
				this.winSize = $(window).width();
				this.settings = $.extend({}, this.defaults, config );
				this.$frame = this.$el.children('div');
				this.$slideWrap = this.$frame.children('ol');
				this.$slidesCollec = this.$slideWrap.children();
				this.initSlideLength = this.$slidesCollec.length;
				this._initDOM();
			},
			/* Initialize the DOM.
			** The goal here is to make all DOM maniputalion on Init and dont touch the DOM again after that
			**
			*/

			_initDOM : function() {

				// Create the navigation
				
				var i = 0,
					navHtml = $('<ul>'),
					navItemHtml;

				for ( ;i < this.initSlideLength; i++ ) {
					navItemHtml = $('<a>', {
						'class': 'silkCarousel-nav-item',
						'data-page': i
					});
					

					if (this.settings.navigationStyle === 'thumbnails') {
						navItemHtml.append( this.$slidesCollec.eq(i).children('img').clone());
					} else {
						navItemHtml.append($('<span>'));
					}
					navItemHtml = $('<li>').append(navItemHtml);
					navHtml.append(navItemHtml);
				}
				navHtml.addClass('silkCarousel-menu').prependTo(this.$el);
			

				// Duplicate the whole collection to the left and then the first slide to the right.
				// We could only duplicate the first and last but then we have to set 2 "reset" trigger on the first and last elemenst
				// Where we juse need to set that trigger on the first one here
				this.$slidesCollec = this.$slidesCollec.clone()
											.appendTo(this.$slideWrap)
												.eq(0).clone()
													.appendTo(this.$slideWrap)
														.siblings();

				// Create and stock "spacers" for the negative jump to page
				this.$spacers = this.$slidesCollec.slice(0, this.initSlideLength-2)
								.clone()
									.addClass('silkCarousel-spacer')
										.css({display:"none"});

			},

			_build: function() {
				
			}
	};

	jQuery.fn.silkCarousel = function(config){
		var instance = Object.create(silkCarousel);
		return this.each(function() {
			instance.init(this, config);
		});
	};

	// Make the main object available on global scope if a testing framework is available
	jQuery.fn.silkCarousel.Class = silkCarousel;

}( jQuery, window, document ));