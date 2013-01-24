#carouselThis Jquery Plugin

Carousel / Slider Plugin that focuses on ease of use and performance. Very light weight with 0 DOM heavy lifting after initialization of the plugin. 

_ More instructions comming soon _

##Usage

###Markup & Init

This is the minimum markup to get statrted

```html
<div id="carousel">       
   <div>
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

`Option `
Decsription

