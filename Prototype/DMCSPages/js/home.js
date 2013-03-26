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

$(function() {
	language = getLang();
	
	setCookie(language);

})