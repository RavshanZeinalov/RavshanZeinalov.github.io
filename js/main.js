$(document).ready(function() {
	// makes header full height
	//function heightDetect() {
	//		$("#header").css("height", $(window).height());
	//	};
	//	heightDetect();
	//	$(window).resize(function() {
	//		heightDetect();
	//	});
	// end makes header full height

	// loader
	$(window).load(function() { 
		$(".loader-inner").fadeOut(); 
		$(".loader").delay(400).fadeOut("slow"); 
	});
	// end loader

	// makes sandwich active after click and turns it to cross
	$(".toggle-menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	// after sandwich clicked makes toggle open and close menu
	$(".toggle-menu").click(function() {
		if ($(".menu").is(":visible")) {
			$(".text-header").css("opacity", "1");
			$(".menu").fadeOut(600);
			$(".menu li a").removeClass("fadeInUp animated");// delete class fadeInUp after closing menu
		} else {
				$(".text-header").css("opacity", "0.3");// after opening of menu makes text in header opacity
				$(".menu").fadeIn(600);
				$(".menu li a").addClass("fadeInUp animated");// makes menu fadeInUp
			};
	});

	// closes menu after clicking its items
	$(".menu ul a").click(function() {
		$(".menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".text-header").css("opacity", "1");// after clicking items return opacity 1
	});	

	// arrow button in header. add class active after hover
	$(function () {
	  $('.square').hover(function () {
	    $(this).toggleClass('active');
	  });
	});	

	// progress bar scroll(color line left)
	$( window ).scroll(function() {
	  var percentage = document.body.scrollTop / ($(document).height() - window.innerHeight );
	  $("#scrollbar").height(percentage*100 + "%");
	});

	// wow js plugin
		$(function () {
			new WOW().init();
		});

// progress bar in section ABOUT
$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  
$( window ).scroll(function() {   
	if($( window ).scrollTop() > 10){  // scroll down abit and get the action   
		$(".progress-bar").each(function(){
		  each_bar_width = $(this).attr('aria-valuenow');
		  $(this).width(each_bar_width + '%');
		});
     
 	}  
});

// magnific popup
// my photo in section about
  $('.my-photo').magnificPopup({
  	type:'image',
  	mainClass: 'mfp-with-zoom',
  	zoom: {
    enabled: true,
    duration: 400,
    easing: 'ease-in-out',
    opener: function(openerElement) {
      return openerElement.is('img') ? openerElement : openerElement.find('img');
    }
  	}
 	});

// end my photo in section about

// galery in section my job
	  $('.magnific-popup').magnificPopup({
	  	type:'image',
	  	mainClass: 'mfp-with-zoom',
	  	zoom: {
	    enabled: true,
	    duration: 400,
	    easing: 'ease-in-out',
	    opener: function(openerElement) {
	      return openerElement.is('img') ? openerElement : openerElement.find('img');
	    }
	  },
			gallery: {
			  enabled: true,
			  preload: [0,2],
			  navigateByImgClick: true,
			  // markup of an arrow button
			  arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			  tPrev: 'previous', // title for left button
			  tNext: 'Next', // title for right button
			  tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
			}

	  });
	// end galery in section my job

	// form validation
	$("#form").validate({
		messages: {
	    name: {
	    	required: "*Please enter your name",
	    	name: "*Please enter at least 2 characters"
	    },
	    email: {
	      required: "*Please enter your email address",
	      email: "*Your email address must be in the format of name@domain.com"
	    },
	    message: {
	    	required: "*Please leave your message"
	    }
	  }
	});
	// form validation

	// smooth scroll
	var $page = $('html, body');
	var $page = $('html, body');
	$('.arrow-button a[href*="#"]').click(function(){
		$page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	    return false;
	});
	$('nav ul li a[href*="#"]').click(function() {
	    $page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	    return false;
	});
	$('.button-to-top[href*="#"]').click(function(){
		$page.animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 500);
	    return false;
	});
	// end smooth scroll

}); //end main



