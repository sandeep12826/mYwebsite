/************* Template Init Js File ************************
    Template Name: POR-S
    Author: Shahed Ahmed

/*------------------------------------------------------------------------------------
    
costom.js
=============

01 - Scrollit 
02 - Navbar Scrolling
03 - Progressbar

-------------------------------------------------------------------------------------*/


$(function () {

	"use strict";
	var wind = $(window);

	/*==================================
	 1.ScrollIt 
	====================================*/

	$.scrollIt({
		upKey: 38, 
		downKey: 40, 
		easing: 'swing', 
		scrollTime: 700, 
		activeClass: 'active',
		onPageChange: null, 
		topOffset: -15 
	});


	/*==================================
	2.Navbar Scrolling 
	====================================*/

	wind.on("scroll", function () {
		var bodyScroll = wind.scrollTop(),
			navbar = $(".navbar")
		if (bodyScroll > 600) {
			navbar.addClass("fixed-top");
		} else {
			navbar.removeClass("fixed-top");
		}
	});

    

	/*==================================
	3.Progressbar 
	====================================*/

	wind.on("scroll", function () {

		var bodyScroll = wind.scrollTop()

		if (bodyScroll > 500) {

			$('#bar2').barfiller({
				// duration in ms
				duration: 800
			});

			$('#bar3').barfiller({
				// duration in ms
				duration: 900
			});

			$('#bar4').barfiller({
				// duration in ms
				duration: 1000
			});

			$('#bar5').barfiller({
				// duration in ms
				duration: 1100
			});
		}

	});


});

