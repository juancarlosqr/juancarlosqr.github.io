//============ Navmenu ============//
$(document).ready(function() {

$('.top-nav li').localScroll();

});


//============ Fixed header ============//

$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 350 )
        $(".navbar-default").css("padding", "10px 0px 7px");
    else
        $(".navbar-default").css("padding", "50px 0px 50px");
});


$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 350 )
        $(".navbar-brand").css("font-size", "35px");
    else
        $(".navbar-brand").css("font-size", "42px");
});


$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 350 )
        $(".navbar-default").css("background", "#ffffff");
    else
        $(".navbar-default").css("background", "transparent");
});


//==================== Project Slider ========================//
$(document).ready(function(){
	  $('#project-slider').flexslider({
	    animation: "slide",
	    controlNav: "false",
	    DirectionNav: "true"
	  });
});


//==================== Portfolio ========================//
$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});				
		},
		hoverEffect: function () {
		}
	};
	// Run the show!
	filterList.init();
});	

    $(document).ready(function() {
      $("#owl-demo").owlCarousel({

      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem : true

      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

      });
    });


// Paxallax
$(document).ready(function(){
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('.intro-header').parallax("50%", 0.4);
	$('.portfolio-wrap').parallax("50%", 0.4);
	$('.team-wrap').parallax("50%", 0.4);
	$('.pricing-wrap').parallax("50%", 0.4);
	$('.contact-wrap').parallax("50%", 0.4);
});
