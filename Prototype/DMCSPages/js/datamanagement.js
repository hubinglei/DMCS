$(function(){
		   $('ul.left-menu li').click(function(){
				var This =$(this);
				$('ul.left-menu li').removeClass('selected');					 
						
				This.addClass('selected');
											   
											   })
		   })