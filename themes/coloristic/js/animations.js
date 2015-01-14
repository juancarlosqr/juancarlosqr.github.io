		$(window).scroll(function() {


$('.sc1').addClass('animated');
$('.sc2').addClass('animated');
$('.sc3').addClass('animated');
$('.section-title').addClass('animated');
$('.portfolio').addClass('animated');
$('.s1').addClass('animated');
$('.s2').addClass('animated');
$('.info-content').addClass('animated');
$('.staff-content').addClass('animated');
$('.staff-content').addClass('animated');
$('.tw').addClass('animated');
$('.pricing1').addClass('animated');
$('.pricing2').addClass('animated');
$('.pricing3').addClass('animated');
$('.ci1').addClass('animated');



			$('.sc1').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("fadeInLeftBig");
				}
			});

			$('.sc2').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("fadeInUp");
				}
			});

			$('.sc3').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+500) {
					$(this).addClass("fadeInRightBig");
				}
			});

			$('.section-title').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("bounceIn");
				}
			});

			$('.portfolio').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("flipInX");
				}
			});

			$('.s1').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("slideInLeft");
				}
			});

			$('.s2').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("slideInRight");
				}
			});


			$('.info-content').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("fadeIn");
				}
			});


			$('.staff-content').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("slideInDown");
				}
			});

			$('.tw').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("bounceIn");
				}
			});

			$('.pricing1').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("slideInDown");
				}
			});

			$('.pricing2').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("slideInDown");
				}
			});

			$('.pricing3').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("slideInDown");
				}
			});

			$('.ci1').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+600) {
					$(this).addClass("flipInY");
				}
			});


		});
