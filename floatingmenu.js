$(window).scroll(function () 
		{
			if($(window).width() >= 701)
			{
				if ( $(this).scrollTop() > 300)
	  			{
	   				if (!$('#head').hasClass('headerfinal'))
	      			{
	            		$('#head').stop().addClass('headerfinal').css('top', '-100px').animate(
	                	{	
	                	    'top': '0px'
	                	}, 500);
	        		}
	    		}
			
			 	else if ( $(this).scrollTop() <= 300) 
			 	{
			 		$('#head').removeClass('headerfinal');
			 	}
			}
		 });