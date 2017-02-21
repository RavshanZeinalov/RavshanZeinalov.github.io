$(document).ready(function(){


//toggle sandwich script
$('.toggle-menu').click(function() {
  $('.sandwich').toggleClass('sandwich-active');

  // open menu 
  if ($("#wpapper-list-menu").is(":visible")) {
    $("#wpapper-list-menu").fadeOut(600);
  }
  else {
    $("#wpapper-list-menu").fadeIn(600);
    }
});



// close menu after clicking its items
$("#wpapper-list-menu ul a").click(function() {
    $("#wpapper-list-menu").fadeOut(600);
    $(".sandwich").toggleClass("sandwich-active");
  });



//Toggle background-color navbar/toggle-menu,
//toggle logo and text 'get-in-touch'..
// ..when the user scrolls the page  
$(window).scroll(function() {
  if($(this).scrollTop() > 200 ) {
    $('.get-in-touch').addClass('get-in-touch-bg');
    $('.toggle-menu').addClass('toggle-menu-bg');
    $('.navbar').addClass('navbar-bg');
    $('.logo-nav').addClass('logo-nav-display');
    }
  else {
    $('.get-in-touch').removeClass('get-in-touch-bg');
    $('.toggle-menu').removeClass('toggle-menu-bg');
    $('.navbar').removeClass('navbar-bg');
    $('.logo-nav').removeClass('logo-nav-display');
  }
});



  // CAROUSEL IN HEADER
  $('.owl-carousel').owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true
  });


  // smooth scroll btn 'brief-us' & menu & logo in nav
  var $page = $('html, body');
  $('.btn-brief-us a[href*="#"]').click(function(){
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  $('.list-menu li a[href*="#"]').click(function(){
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  $('.logo-nav').click(function(){
    $page.animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });






// youtube video player
  $('.video-button').on("click", function() {
    var element = $(this).closest(".btn-img-video").next();
    var vidId = $(element).data("vid-src");
    var youtube = '<iframe src="//www.youtube.com/embed/'+ vidId +'?autoplay=1&showinfo=0&modestbranding=1&rel=0" frameborder="0" allowfullscreen></iframe>';
    $(this).closest("div.btn-img-video").fadeTo(300, 0, function() {
        $(element).prepend(youtube);
        $(element).fadeIn(300);
        $(this).hide();
    });
    return false;
  });

  $('.video-thumbnail button').on("click", function() {
    var iframe = $(this).prev();
    var vid = $(this).parent();
    var thumbnail = $(this).parent().prev();
    iframe.remove('iframe');
    thumbnail.fadeTo(600, 1.0);
    vid.hide();
  });



  // view MORE article
  //after click on 'view-more' appear more article and fadeOut btn 'view-more'
  $('.btn-view-more-article a').click(function() {
    $('.btn-view-more-article').toggleClass('btn-view-more-article-active');

    if ($('.btn-view-more-article a strong').is(':visible')) {
      $(".btn-view-more-article a strong").fadeOut(0);
    }
    else {
      $(".btn-view-more-article a strong").fadeIn(0);
    }
    if ($('.btn-view-more-article a span').is(':visible')) {
      $(".btn-view-more-article a span").fadeOut(0);
    }
     else {
      $(".btn-view-more-article a span").fadeIn(0);
    } 
    $('.more-article').slideToggle(2500);
      return false;
  });



  // POPUP FANCYBOX FOR SECTION NEWS
  $('#news a').fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    nextEffect  : 'none',
    prevEffect : 'none',
    openSpeed : 400,
    closeSpeed : 400
  });



  // section OUR WORK
  // view MORE project
  //after click on 'view-more' appear more article and fadeOut btn 'view-more'
  $('.btn-view-more-project a').click(function() {
    $('.btn-view-more-project').toggleClass('btn-view-more-project-active');

    if ($('.btn-view-more-project a strong').is(':visible')) {
      $(".btn-view-more-project a strong").fadeOut(0);
    }
    else {
      $(".btn-view-more-project a strong").fadeIn(0);
    }
    if ($('.btn-view-more-project a span').is(':visible')) {
      $(".btn-view-more-project a span").fadeOut(0);
    }
     else {
      $(".btn-view-more-project a span").fadeIn(0);
    } 
    $('.more-project').slideToggle(2500);
      return false;
  });




    // POPUP FANCYBOX FOR SECTION OUR WORK
  $('#our-work a').fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    nextEffect  : 'none',
    prevEffect : 'none',
    openSpeed : 400,
    closeSpeed : 400
  });



  // CAROUSEL IN TESTIMONIALS
  $('.carousel-testimonials').owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true,
    autoPlay : true
  });

  // btn in section testimonial 'READ' quote
  // btn1
  $('.btn-read-quote1').click(function() {
    $('.hidden-quote1').toggleClass('hidden-quote-active');

    if ($(".btn-read-quote1").is(":visible")) {
      $(".btn-read-quote1").fadeOut(600);
    }
    else {$(".btn-read-quote1").fadeIn(600);}
  });
  // btn2
  $('.btn-read-quote2').click(function() {
    $('.hidden-quote2').toggleClass('hidden-quote-active');

    if ($(".btn-read-quote2").is(":visible")) {
      $(".btn-read-quote2").fadeOut(600);
    }
    else {$(".btn-read-quote2").fadeIn(600);}
  });
  // btn3
  $('.btn-read-quote3').click(function() {
    $('.hidden-quote3').toggleClass('hidden-quote-active');

    if ($(".btn-read-quote3").is(":visible")) {
      $(".btn-read-quote3").fadeOut(600);
    }
    else {$(".btn-read-quote3").fadeIn(600);}
  });
  // btn4
  $('.btn-read-quote4').click(function() {
    $('.hidden-quote4').toggleClass('hidden-quote-active');

    if ($(".btn-read-quote4").is(":visible")) {
      $(".btn-read-quote4").fadeOut(600);
    }
    else {$(".btn-read-quote4").fadeIn(600);}
  });
  // btn5
  $('.btn-read-quote5').click(function() {
    $('.hidden-quote5').toggleClass('hidden-quote-active');
    if ($(".btn-read-quote5").is(":visible")) {
      $(".btn-read-quote5").fadeOut(600);
    }
    else {$(".btn-read-quote5").fadeIn(600);}
  });



  // CAROUSEL IN SECTION BRIEF US
  $('.wrap-carousel-brief').owlCarousel({
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem : true,
    autoPlay : true
  });






}); // end



  // select in section our work
  var select = document.getElementById('selectId');
    select.addEventListener('change', filterFaculty);

    function filterFaculty() {
      var divs = [].slice.call(document.querySelectorAll("#our-work .wrapper-work-project a"));
      
      divs.forEach(function(div) {
        div.style.display = ['View by Category', div.getAttribute('data-category')].some(testValue => testValue === select.value) ? 'block' : 'none';
      });
    }