# BCMagnet.js


magnet.js function that make menu bar ( or any chosen html DOM element ) stick at top of screen if you scroll past it

Magnet function tracks top edge of a target element and a scroll amount.
When top most edge of a target element hits the top of the screen, a class added.
With this class you can stop element from scrolling off the screen and stick it to the top of the screen edge. 

NOTE: 
1. Has option to disable code on mobile device 
2. Does not require jQuery. 


#1 Download magnet.js and link it to you document

```
<script type="text/javascript" src="js/magnet.js"></script>	
```

#2 Add following style and class to you CSS

NOTE: class name is up to you. Just make sure that you use the same when you call BCmagnet function

Here is a suggested code, and it should work in most of the 
```
.magnet{
	position:fixed;
	top:0;	
}
```


#3 Activate code 

Call function from your document.ready()

Function takes  3 parameters 

BCmagnet( targetElementID[String] , className[String] , mobileDisable[bool])

targerElementID  - String of an element that you want this code to take actions on. 

className - Remember that class that you created. So here you send this class name to a function to add. 

mobileDisable - true or false  I had to add this to disable function on a mobile devices. ( Just did not like how it worked on mobile device but it is up to you. )

```
$(document).ready(function($) {
	BCmagnet("mainNav","magnet",true);
}
```


