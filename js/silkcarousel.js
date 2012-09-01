/**
 * SilkCarousel - jquery Plugin
 * 2011 Silk Interactive Limited
 * All rights reserved.
*/

jQuery.fn.silkcarousel = function(options){
	//////////// Configuration Parameters	
	
	var defaults = {
		type : 'fluid',								// normal, multiple, fluid
		size : 500,
		easing : "easeOutQuint",
		speed : 500,
		autoDelay : 9000},
		
		settings = jQuery.extend({}, defaults, options),
		$this = this;
		
	return $this.each (function () {    	
	
	////////////////// GLOBAL VARS	//////////////
		var winSize =  $(window).width(),
			frameWdth = settings.size,
			frame = $this.find('.carouselWarper').css('overflow','hidden'),
			slideWarp = frame.find(':first(ol)'),
			slideArr = slideWarp.children(),
			pageNav = $this.find('a.pageNav'),
			initLgth = slideArr.length,					// Saving original number of slides
			currPage = initLgth,
			left;
			
	////////////////// Fluid carousel Init		
		function initiFluid() {
			winSize =  $(window).width(),
			frameWdth = winSize,
			frame.css('width', frameWdth);
	 		slideWarp.children().css({
							'padding-left': ((winSize-settings.size) /2),
							'padding-right': ((winSize-settings.size) /2)
							}) 
	
		};
				
		if (settings.type == "fluid"){
			initiFluid()
			$(window).resize(function() {
			    if($this.resizeTO) clearTimeout($this.resizeTO);
			    $this.resizeTO = setTimeout(function() {
			    	initiFluid();
  					resetCarousel(currPage)
			    }, 200);
			});					
		};
																			
		//////////// Preparing the DOM	
		//1. Duplicate the whole array to the left, then the first el to the extrem right then stock the whole thing, then...nah that's it 		
		slideArr = slideArr.clone()
					.appendTo(slideWarp)
						.eq(0)
							.clone()
								.appendTo(slideWarp)
									.siblings();
			
		//2. Create and stock "spacers" for the negative jump to page
		var	clones = slideArr.slice(2,7)
						.clone()
							.addClass('spacer')
								.css({display:"none"})
									.prependTo(slideWarp);		
		
		pageNav.eq(0).addClass('current');
		//////////// Set CSS
		slideWarp.css('width',(frameWdth * (initLgth*3)));	
		
		
		//////////// Reset To Slide P
		function resetCarousel(p){
			frame.scrollLeft(frameWdth * p);
			currPage = p;	
		};

		//////////// Take in a page index and return its value ///////// ! NOTE : Index % initlgth patern for unknow length array
		function indexIsContent (index) {	
			if ((index - initLgth) <= 0){return index;}
			else {
				for (var i = 2; i < 4; i++) { 					// var i = 2 cause it can't be 0 nor 1
					if ((index - (initLgth * i)) <= 0) {		//  i < 4 cause we know the lgth.. 
						return (index - (initLgth * (i -1))) 	// -1 cause we want the one before the one witch return <0
					};
				};
			};
		};
		resetCarousel(currPage)
					
		
		function addCurrent(index){
			for(i=0; i<pageNav.length; i++){
				var nb = parseInt(pageNav.eq(i).attr('rel'));
				var pNb = indexIsContent(index);
				if (nb == pNb){
					pageNav.removeClass('current');
					pageNav.eq(i).addClass('current');
					return false;
				}
			}
		}

		/////////////////////// GOTO PAGE /////////////////////////
		function goToPage( toPage, isJump, thisCont ){   
			if ( frame.is(':animated')) { return false; } 
			////// 1- Go to next slide and slice if needed 
			if(!isJump){
				left = frameWdth * toPage;
				currPage += toPage;
				 	
			}else{
					var dist = toPage -  thisCont;
					left = frameWdth;
					if (Math.abs(dist)!== dist ){
						left= -left;
						var sliced = slideArr.slice(currPage + (dist+1) , currPage).css({display:"none"}); 		// Slice and hide the slide in between requested page and current	
						for (var i =0 ; i < sliced.length; i++){ 										// we show as many clones as neccesary to fill the gaps caused by slicing
								clones.eq(i).css({display:""})
							}									
					}else{					
						sliced = slideArr.slice(currPage+1 , currPage + dist ).css({display:"none"});
						}
				currPage += dist; 					
			};
				
		
		// 2 Animate
			frame.animate({
				 scrollLeft : '+=' + left
	                }, settings.speed, settings.easing, function(){                	
						
						// 3 call back
						if ( currPage === 0 
								|| currPage === slideArr.length )resetCarousel(initLgth);
																		
						if ( isJump) {
							sliced.css({display:""});							
							clones.css({display:"none"});						
							frame.scrollLeft(frameWdth * currPage);							
						}				
					})
			addCurrent(currPage+1);					 
			return false;
		}	


		////////////////////// EVENTS///////////////////////
		var rightBt = $('#rightBtn');
				
		/////// Auto-scrolling function
		function slide(){ 
			rightBt.click();
		}
		//Launch the scroll every 4 seconds
		var intervalId = window.setInterval(slide, settings.autoDelay);
		
		rightBt.click (function(e){	
			e.preventDefault();
			if(e.originalEvent){window.clearInterval(intervalId)}	//On user click deactivate auto-scrolling
		
			return goToPage(+1, false);		
		});		
							
		$('#leftBtn').click (function(e){
				e.preventDefault();
				 if(e.originalEvent){window.clearInterval(intervalId)}
				 return goToPage(-1, false);
			});	 
			
		pageNav.click (function(e){
			e.preventDefault();
				var p =  parseInt( jQuery( this ).attr('rel')), 
					c = indexIsContent (currPage+1);	
					if ( c === p ) {return false; }
					if(e.originalEvent){window.clearInterval(intervalId)}
				return goToPage( p, true, c);
		});
		
		
	});
}

