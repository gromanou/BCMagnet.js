// Magnet function tracks top edge of a target element and a scroll amount.
// When top most edge of a target element hits the top of the screen, a class added.
// With this class you can stop element from scrolling off the screen and stick it to the top of the screen edge.
//
// This class has to have something like this:
//
// .magnet{
//		position:fixed;
//		top:0;	
// }
//
// To ninitiate code  
// 
// $(document).ready(function($) {
//
//		BCmagnet("#mainNav","magnet",true);
//
// }
// 


// Helper function to add or remove class. 
//
// AddClass(document.documentElement, 'my-awesome-class', true);  To Add Class
// AddClass(document.documentElement, 'my-awesome-class', false); To Remove Class
function AddClass(o,c, bAdd){
    var list = o.className.split(" ");
    if (list.indexOf(c)!==-1){
        if (!bAdd) delete list[list.indexOf(c)];
    }else{
        if (bAdd) list[list.length] = c;
    }
    o.className = list.join(" ");
}



var BCmagnet = function(targetID , className , mobileDisable){
	if(document.getElementById(targetID) == undefined){// returns error message to console 
		console.log("Target element with ID: "+targetID+" was not found.")
	}else{
		var TargetElem = document.getElementById("mainNav"); // get target element by ID 
		var topOffset = TargetElem.offsetTop; // Get offset from the top 
		// scroll event listener 
		window.onscroll = function(){
			// when target hit the top && Not on mobile device 
			if((window.scrollY >= topOffset) ){ 
				if(mobileDisable && (screen.width < 480)){
					// do nothing whne mobileDisable is true 
				}else{
					AddClass(TargetElem,className,true);	
				}				
			}else{
				AddClass(TargetElem,className,false); // releases object by removing the class. 
			}

		}
	}	
}
