jQuery(document).ready(function($) 
	{
		$( ".hamburger" ).click(function() 
		{
			event.stopPropagation();
			$( ".menuwrapper" ).slideToggle();
		});

		$('.wrapperitem').click(function()
		{
			$(".menuwrapper").slideToggle();
		});

		$('html').click(function() 
		{
			$( ".menuwrapper" ).slideUp();
		});

		$('.aboutLink').click(function()
		{
			$("html, body").animate({
					scrollTop: $('#section1').offset().top -50 
				}, 1000);
			return false;
		});

		$('#al').click(function()
		{
			$("html, body").animate({
					scrollTop: $('#section1').offset().top -50 
				}, 1000);
			return false;
		});

		$('.servicesLink').click(function()
		{
			$("html, body").animate({
					scrollTop: $('#section2').offset().top -50 
				}, 1000);
			return false;
		});

		$('#sl').click(function()
		{
			$("html, body").animate({
					scrollTop: $('#section2').offset().top -50 
				}, 1000);
			return false;
		});

		$('.projectsLink').click(function()
		{
			$("html, body").animate({
					scrollTop: $('#section3').offset().top -50 
				}, 1000);
			return false;
		});

		$('#pl').click(function()
		{
			$("html, body").animate({
					scrollTop: $('#section3').offset().top -50 
				}, 1000);
			return false;
		});

		$('.contactLink').click(function()
		{
			$("html, body").animate({
					scrollTop: $('#section4').offset().top -50 
				}, 1000);
			return false;
		});

		$('#cl').click(function()
		{
			$("html, body").animate({
					scrollTop: $('#section4').offset().top -50 
				}, 1000);
			return false;
		});
	});