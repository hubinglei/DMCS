function switchPic(ProTag, ProBox) {
	for (i = 1; i <= 4; i++) {
		if ("button" + i == ProTag) {
			$("#" + ProTag).find('a').addClass('on');
		} else {
			$("#button" + i).find('a').removeClass('on');
		}
		if ("pic" + i == ProBox) {
			$('#' + ProBox).show();
		} else {
			$('#pic' + i).hide();
		}
	}
}
function changeImg() {
	var myStep;
	if ($('#pic1').is(":visible")) {
		myStep = 1;
	} else if ($('#pic2').is(":visible")) {
		myStep = 2;
	} else if ($('#pic3').is(":visible")) {
		myStep = 3;
	} else if ($('#pic4').is(":visible")) {
		myStep = 4;
	}
	$("#button dl a").removeClass('on');
	switch (myStep) {

	case 1:
		$('#button2').find('a').addClass('on');
		$('#pic2').show();
		$('#pic1').hide();
		break;
	case 2:
		$('#button3').find('a').addClass('on');
		$('#pic3').show();
		$('#pic2').hide();
		break;
	case 3:
		$('#button4').find('a').addClass('on');
		$('#pic4').show();
		$('#pic3').hide();
		break;
	case 4:
		$('#button1').find('a').addClass('on');
		$('#pic1').show();
		$('#pic4').hide();
		break;
	}
}

$(function() {
	language = getLang();

	setCookie(language);

	// evey 3 sencond change the banner
	setInterval(changeImg, 3000);

})