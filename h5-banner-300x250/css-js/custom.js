var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true}),
               tl1 = new TimelineMax();
               
/*---------------------------------------
  Timeline Animation
---------------------------------------*/  
tl1.set(banner, {visibility: "visible"})
   .set(".text1, .text1a, .text2, .text3, .text4", {borderColor:"#ffffff"})
   .from(".txt1_1", .5, {alpha:0, x:-15, rotation:0.02, ease:Sine.easeOut})   
   .from(".txt1_2", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut},"-=.5")
   .from(".text1", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=.25")
   .to(".text1", .6, {width:"100px", rotation:0.2, ease:Sine.easeOut})
   .from(".triangle2", 1, {alpha:0, transformOrigin:"center left", rotation:-50, ease:Sine.easeInOut}, "-=.5")
   .from(".triangle3", 1, {transformOrigin:"right bottom", rotation:-50, ease:Sine.easeInOut}, "-=.5")
   .to(".text1", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=1.5")
   .from(".cursor1", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=1")
   .from(".txt1_4", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut},"-=1") 
   
   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:360, ease:Sine.easeInOut, delay:.5})
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:360, ease:Sine.easeInOut}, "-=3")
   .to(".txt1", .5, {alpha:0, ease:Sine.easeOut}, "-=2.75")


   .from(".txt2_1", .5, {alpha:0, x:-15, ease:Sine.easeOut}, "txt2-=2")
   .from(".txt2_2", .5, {alpha:0, x:15, rotation:0.02, ease:Sine.easeOut},"txt2-=2")
   .from(".text2", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=1.75")
   .to(".text2", 1, {width:"184px", rotation:0.2, ease:Sine.easeOut}, "-=1.5")
   .to(".text2", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=1")
   .from(".cursor2", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=.5")
   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:720, ease:Sine.easeInOut, delay:.5})
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:720, ease:Sine.easeInOut}, "-=3")
   .to(".txt2", .5, {alpha:0, ease:Sine.easeOut}, "-=2.75")


   .from(".txt3_1", .5, {alpha:0, x:-15, ease:Sine.easeOut}, "txt3-=2")
   .from(".txt3_2", .5, {alpha:0, x:15, ease:Sine.easeOut}, "txt3-=2")
   .from(".text3", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=1.75")
   .to(".text3",.8, {width:"122px", rotation:0.2, ease:Sine.easeOut}, "-=1.5")
   .to(".text3", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=1")
   .from(".cursor3", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=.5")
   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:1080, ease:Sine.easeInOut, delay:.5})
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:1080, ease:Sine.easeInOut}, "-=3")
   .to(".txt3", .5, {alpha:0, ease:Sine.easeOut}, "-=2.75")
   .from(".deep_blue", .5, {alpha:0, ease:Sine.easeOut}, "-=2.75")



   .from(".txt4_1", .5, {alpha:0, x:-15, ease:Sine.easeOut}, "txt4-=2")
   .from(".txt4_2", .5, {alpha:0, x:15, ease:Sine.easeOut}, "txt4-=2")
   .from(".text4", .2, {alpha:0, rotation:0.2, ease:Sine.easeInOut}, "-=1.75")
   .to(".text4", 1.1, {width:"216px", rotation:0.2, ease:Sine.easeOut}, "-=1.5")
   .to(".text4", .1, {borderColor:"none", rotation:0.2, ease:Sine.easeOut}, "-=1")
   .from(".cursor4", .2, {alpha:0, repeat:1, yoyo:true, repeatDelay:.2, rotation:0.2, ease:Sine.easeInOut}, "-=.5")
   .from(".txt4_4", .5, {alpha:0, x:-15, ease:Sine.easeOut})

   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:1080, ease:Sine.easeInOut})
   .from(".triangle1", 1, {alpha:0, transformOrigin:"50% 100%", rotation:-50, ease:Sine.easeInOut}, "-=4")
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:1080, ease:Sine.easeInOut}, "-=3")

   .to(".triangle1", 3, {transformOrigin:"50% 100%", rotation:360, ease:Sine.easeInOut}, "-=2")
   .to(".triangle3", 3, {transformOrigin:"right bottom", rotation:1440, ease:Sine.easeInOut}, "-=3")
   .to(".triangle2", 3, {transformOrigin:"center left", rotation:1440, ease:Sine.easeInOut}, "-=3")
      
   .from(".cta", .8, {x:-140, rotation:0.02, ease:Expo.easeOut}, "-=.5")
   .from(".cta_text", .5, {alpha:0, rotation:0.02, ease:Expo.easeOut}, "-=.25")
;


/*-------------------------------------
  Add all timelines to master timeline...
---------------------------------------*/
masterTimeline.add([tl1]);


/*-------------------------------------
  After window load...
---------------------------------------*/   
window.onload = function()
{
  masterTimeline.play();
}


/*-----------------------------------------
  Count animation duration of a timeline...
-----------------------------------------*/
var currentDuration = masterTimeline.totalDuration();
console.log(currentDuration); 