$(function() {
	$('#okButton').click(function() {
		$('#step1').hide();
		$('#step2').show();

	})
	$('#check_email_button').click(function() {
		$('#step2').hide();
		$('#step3').show();

	})
	$('.go_back').click(function() {
		window.open('home.html', '_self')

	})
})