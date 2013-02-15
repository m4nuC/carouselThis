#carouselThis Jquery Plugin

Carousel/Slider Plugin that focuses on ease of use and performance. Very light weight with 0 DOM heavy lifting after initialization of the plugin. 

Demo [here](http://m4nuc.github.com/carouselThis/).

* More Features on the way *

##Usage

###Markup & Init

This is the minimum markup to get statrted

```html
<div id="carousel">       
   <div id="carouselThis-frame">
      <ol>
         <li>Your content here (Images, Inline text ..)</li>
         <li>Your content here (Images, Inline text ..)</li>
         <li>Your content here (Images, Inline text ..)</li>
         <li>Your content here (Images, Inline text ..)</li>
      </ol>
   </div>
</div>
```

With the mark above the Script init would look like:

```javascript
$(document).ready(function({
	$("#carousel").carouselThis();
})
```
Or with options:

```javascript
$(document).ready(function({
   $("#carousel").carouselThis({showPager: false});
})
```
	
##Options
      defaults : {
            type                : 'normal', // normal, fluid, responsive
            easingMethod        : "linear",
            tansitionSpeed      : 500,
            switchDelay         : 2000,
            navigation : {
               'type'       : 'thumbnail',
               'position'   : 'top',
               'id'         : 'carouselThis-menu',
               'className'  : 'carouselThis-menu',
               'rightBtnId' : 'rightBtn',
               'leftBtnId'  : 'leftBtn'
            }
         }
`type`
Currently Deprecated (Todo : fluid, responsive)

`easingMethod `
Must be an existing easing method name. Default to `linear`

`tansitionSpeed`
Speed of the sliding effect

`switchDelay `
Delay of the auto slide (TODO)

`navigation`
Configuration object :


