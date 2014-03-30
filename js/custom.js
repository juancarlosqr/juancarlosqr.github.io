$(document).ready(function(){
	// prettyPhoto
	$("a[class^='prettyPhoto']").prettyPhoto();

	// plugin carousel
	$('.carousel').carousel();

	// jQuery onePageNav 
	$('.navbar-nav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 94,
		scrollThreshold: 0.1,
		easing: 'swing',
	});

	// jquery plugin cycle
	$('.list-testimonial').cycle({
		slides: 'li',
		pager: ".testimonial-bullets",
		timeout: 0,
		autoHeight: 0,
		centerHorz: true
	});

	// size testimonial 
	$('.list-testimonial').on( 'cycle-update-view', function(e,o,sh,cs) {
		var $this = $(this);

        $this.animate({
          height: $(cs).height()
        }, 500);

        $(window).resize(function() {
          $this.stop().animate({
            height: $(cs).height()
          }, 500);
        });
      });

	// testing border radius support
	if (!Modernizr.borderradius) {
		$('#section-contact #links-contact a').attr( "border", "0px" ).removeAttr("border-radius");
	}

});
