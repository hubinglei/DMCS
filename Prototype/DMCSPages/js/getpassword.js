$(function() {
	$('.next').click(function() {
		var myStep;
		if ($('#step1').is(":visible")) {
			myStep = 1;
		} else if ($('#step2').is(":visible")) {
			myStep = 2;
		} else if ($('#step3').is(":visible")) {
			myStep = 3;
		}
		switch (myStep) {
		case 1:
			$('#step2').show();
			$('#step1').hide();
			break;
		case 2:
			$('#step3').show();
			$('#step2').hide();
			break;
		case 3:
			$('#step4').show();
			$('#step3').hide();
			break;
		}
	})
	
	$('#getCode').click(function(){
			$('#codeTips').show();					 
								 })
	$('#backButton').click(function(){
			$('#step1').show();
			$('#step2').hide();				 
								 })
	
	
})