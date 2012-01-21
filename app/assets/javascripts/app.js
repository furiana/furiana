/* Foundation v2.1.3 http://foundation.zurb.com */
$(document).ready(function () {

	/* Use this js doc for all application specific JS */

	/* TABS --------------------------------- */
	/* Remove if you don't need :) */

	function activateTab($tab) {
	  var $activeTab = $tab.closest('dl').find('a.active'),
	      contentLocation = $tab.attr("href") + 'Tab';

	  //Make Tab Active
	  $activeTab.removeClass('active');
	  $tab.addClass('active');

    //Show Tab Content
		$(contentLocation).closest('.tabs-content').find('li').hide();
		$(contentLocation).show();
	}

	$('dl.tabs').each(function () {
		//Get all tabs
		var tabs = $(this).children('dd').children('a');
		tabs.click(function (e) {
		  activateTab($(this));
		});
	});

	if (window.location.hash) {
    activateTab($('a[href="' + window.location.hash + '"]'));
  }


	/* PLACEHOLDER FOR FORMS ------------- */
	/* Remove this and jquery.placeholder.min.js if you don't need :) */

	$('input, textarea').placeholder();

	/* DROPDOWN NAV ------------- */
	/*
	$('.nav-bar li a, .nav-bar li a:after').each(function() {
		$(this).data('clicks', 0);
	});
	$('.nav-bar li a, .nav-bar li a:after').bind('touchend click', function(e){
		e.stopPropagation();
		e.preventDefault();
		var f = $(this).siblings('.flyout');
		$(this).data('clicks', ($(this).data('clicks') + 1));
		if (!f.is(':visible') && f.length > 0) {
			$('.nav-bar li .flyout').hide();
			f.show();
		}
	});
	$('.nav-bar li a, .nav-bar li a:after').bind(' touchend click', function(e) {
		e.stopPropagation();
		e.preventDefault();
		if ($(this).data('clicks') > 1) {
			window.location = $(this).attr('href');
		}
	});
	$('.nav-bar').bind('touchend click', function(e) {
		e.stopPropagation();
		if (!$(e.target).parents('.nav-bar li .flyout') || $(e.target) != $('.nav-bar li .flyout')) {
			e.preventDefault();
		}
	});
	$('body').bind('touchend', function(e) {
		if (!$(e.target).parents('.nav-bar li .flyout') || $(e.target) != $('.nav-bar li .flyout')) {
			$('.nav-bar li .flyout').hide();
		}
	});
	*/

	/* DISABLED BUTTONS ------------- */
	/* Gives elements with a class of 'disabled' a return: false; */


});

/* Orbit */
     $(window).load(function() {
         $('#featured').orbit({
			     animation: 'fade',                  // fade, horizontal-slide, vertical-slide, horizontal-push
				 animationSpeed: 800,                // how fast animtions are
				 timer: true, 			 // true or false to have the timer
				 advanceSpeed: 4000, 		 // if timer is enabled, time between transitions 
				 pauseOnHover: true, 		 // if you hover pauses the slider
				 startClockOnMouseOut: true, 	 // if clock should start on MouseOut
				 startClockOnMouseOutAfter: 400, 	 // how long after MouseOut should the timer start again
				 directionalNav: true, 		 // manual advancing directional navs
				 captions: true, 			 // do you want captions?
				 captionAnimation: 'fade', 		 // fade, slideOpen, none
				 captionAnimationSpeed: 800, 	 // if so how quickly should they animate in
				 bullets: true,			 // true or false to activate the bullet navigation
				 bulletThumbs: false,		 // thumbnails for the bullets
				 bulletThumbLocation: '',		 // location from this file where thumbs will be
				 afterSlideChange: function(){}, 	 // empty function 
				 fluid: true                         // or set a aspect ratio for content slides (ex: '4x3') 
		 });
	 });