$(function(){
		   
		   $('.nextButton').click(function(){
					    var mySlidde;
						if($('#slide1').is(":visible")){
							mySlidde =1;
							}else if($('#slide2').is(":visible")){
								mySlidde =2;
								}
					    switch(mySlidde){
							case 1:
							$('#slide2').show();
							$('#slide1').hide();
							$('.preButton').show();
							$('#arrow').css('left','-160px')
							break;
							
							case 2:
							$('#slide3').show();
							$('#slide2').hide();
							$('.preButton').show();
							$('.nextButton').hide();
							$('#arrow').css('left','-35px')
							break;
							}
	})
		   $('.preButton').click(function(){
						var mySlidde;
						if($('#slide2').is(":visible")){
							mySlidde =1;
							}else if($('#slide3').is(":visible")){
								mySlidde =2;
								}
					    switch(mySlidde){
							case 1:
							$('#slide1').show();
							$('#slide2').hide();
							$('.preButton').hide();
							$('.nextButton').show();
							$('#arrow').css('left','-290px')
							break;
							
							case 2:
							$('#slide2').show();
							$('#slide3').hide();
							$('.preButton').show();
							$('.nextButton').show();
							$('#arrow').css('left','-160px')
							break;
							}
										  
										  })
		   
		   })