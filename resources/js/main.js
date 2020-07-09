
jQuery(document).ready(function(){
// preloder
 
  setTimeout(function(){
    $('#loading_bg').fadeToggle();
  }, 1500);

 // WOW Scroll Animation
 
 new WOW().init();

 // -- smooth scroll -- //
 $(".smooth_scroll a").on('click', function(e) {
  var anchor = $(this);
  $("html, body").stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - 50
  }, 1000);
  e.preventDefault();
});

  //scroll menu
  $(window).scroll(function(){
		var top = $(window).scrollTop();
		if(top>=60){
			$(".header_area").addClass('secondary');
		}
		else
		    if ($(".header_area").hasClass('secondary')){
				$(".header_area").removeClass('secondary');

		}
	});

  	// ACTIVE LINE
    $(".main_menu  li a").click(function(){
      $(".main_menu li a").removeClass("active");
      $(this).addClass("active");
  });




// type text
    var typed = new Typed('.type_text',{
        strings: ['<strong>I AM </strong> <strong class="typed_color">WEB DESIGNER</strong>',
                  '<strong>AND</strong> <strong class="typed_color">FRONT-END DEVELOPER.</strong>',
                  '<strong>I CREATE</strong> <strong class="typed_color">COOL WEBSITE.</strong>'],
                  typeSpeed:50,
                   loop:true,
                   backSpeed:50,
               });

});

jQuery(document).ready(function(){


	// Logo
	var $logo 	= $('#logo');

    if (location.href.indexOf("#") != -1) {
        $logo.show();
    }
	// Show logo 
	$('.menu .tabs a').click(function() {
	  $logo.fadeIn('slow');
	});
	// Hide logo
	$('.tab_profile').click(function() {
	  $logo.fadeOut('slow');
	});	

//Needed variables
var $content 		= $("#content");
	

  $content.easytabs({
  animate			: true,
  updateHash		: false,
  transitionIn		:'slideDown',
  transitionOut		:'slideUp',
  animationSpeed	:600,
  tabs				:".tab_menu",
  tabActiveClass	:'active'
});


    
  //progress bar

$(document).ready(function(){
  
  $(window).bind("scroll", function(event) { 
   $("#progress:in-viewport").each(function() {
       $('#bar1').barfiller({
         barColor:'',
         duration: 3000
       });
        $('#bar2').barfiller({
         barColor:'',
         duration: 3000
       });
         $('#bar3').barfiller({
         barColor:'',
         duration: 3000
       });
          $('#bar4').barfiller({
         barColor:'',
         duration: 3000
       });
     });
   
   });
 });	

});

$(document).ready(function($){
	$('.project_filter li, .tab_list li').on('click',function(){
		$(".project_filter li, .tab_list li").removeClass("active")
		$(this).addClass("active");
			var selector =$(this).attr('data-filter');
	 	$(".project_list").isotope({
	 		filter:selector
		});
	});
	});

var $grid = $('.project_list').isotope({
  // options
});

// modal video
$(document).ready(function () {

  $(".video_play_button").modalVideo();

  $(".video_play_button").on('click', function () {

    return false;
  });


$(".js-modal-btn").modalVideo();


//CTA
$(".testimonial_carousel").owlCarousel({
  items:1,
  loop:true,
  autoplay:true,
  dots:true,
  nav:false
});


// COUNTER UP
  $('.counter_number span').counterUp({
      delay: 10,
      time: 2000
  });

  });



//MOBILE MANU
 function openNav(){
    document.getElementById("myNav").style.width ="100%";
 }
  function closeNav(){
    document.getElementById("myNav").style.width ="0";
 }

// Ainmated

   $(".single-project-item").hover(function(){
        $(".single-project-item  .project-hover h2").removeClass("animated fadeInUp");
        $(this).find(".project-hover h2").addClass("animated fadeInUp");
     });

   