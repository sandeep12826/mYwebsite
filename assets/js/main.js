/************* Main Js File ************************
    Template Name: POR-S
    Author: Shahed Ahmed
    *************************************************************/


/*------------------------------------------------------------------------------------
    
main.js
=============

01 - Animated Headline 
02 - Parallax background
03 - Counter Js
04 - Portfolio Image
05 - Testimonial Slider
06 - Preloader

-------------------------------------------------------------------------------------*/


(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		
		/* 
		=================================================================
		01 - Animated Headline 
		=================================================================	
		*/


		$(function () {
			$('.caption-inner').animatedHeadline({
				animationType: 'slide'
			});
		})


		
		
		
		/* 
		=================================================================
		02 - Parallax background
		=================================================================	
		*/
		
		
		$('.parallax-window').parallax({
			iosFix:true,
			androidFix:true,
			speed:0.1,
		});
		
        
        /* 
		=================================================================
		03 - Counter js
		=================================================================	
		*/
        
          $('.counter').counterUp({
            delay: 10,
            time: 3000
          });
        
        
        /* 
		=================================================================
		04 - Portfolio Image
		=================================================================	
		*/
		

       // IMAGE LOADED JQUERY START     
       $('.grid').imagesLoaded(function () {
              // images have loaded
              //PORTFOLIO START  
              var $grid = $('.grid').isotope({
                itemSelector: '.gallery',
                percentPosition: true,
                masonry: {
                      // use outer width of grid-sizer for columnWidth
                      columnWidth: '.gallery'
                    }
                  })
              // filter items click
              $('.portfolio-filter').on('click', 'li', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                  filter: filterValue
                });
              });
              // filter items on button click
              $('.portfolio-filter').on('click', 'li', function () {
                $(this).addClass('current').siblings().removeClass('current');
              });
              //PORTFOLIO END
            });
          // IMAGE LOADED JQUERY END   
    
		
		

		/* 
		=================================================================
		05 - Testimonial Slider
		=================================================================	
		*/

		$(".ziptop-testimonial-area .owl-carousel").owlCarousel({
			autoplay: true,
			loop: true,
			margin: 30,
			touchDrag: true,
			mouseDrag: true,
			items: 1,
			nav: false,
			dots: true,
			autoplayTimeout: 6000,
			autoplaySpeed: 1200,
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 2
				},
				1200: {
					items: 2
				}
			}
		});
		
	});
    
    
    
    
 /* 
=================================================================
06 - PRELOADER
=================================================================	
*/ 
    
    
       jQuery(window).load(function(){

       //PRELOADING START
       $("#preload").delay(350).fadeOut("slow") 
       //PRELOADING END    
       }); 
    

}(jQuery));


