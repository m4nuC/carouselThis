#carouselThis Jquery Plugin

Carousel Plugin that focus on ease of use and performance.

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

```
$(document).ready(function({
   $("#carousel").carouselThis({showPager: false});
})
```
	
##Options

`Option `
Decsription

