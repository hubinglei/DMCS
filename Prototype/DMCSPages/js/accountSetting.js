$(function() {
	$('#changeEmail')
			.click(
					function() {
						if ($(this).html() != 'OK') {
							var emailObj = $(this).parent().find('.email_d')
							var emailStr = emailObj.html();
							emailObj.remove();
							$(this)
									.parent()
									.find('br')
									.before(
											'<input type="text" value="'
													+ emailStr
													+ '" style="width:200px;margin-top:10px;" id="myEmail"/>');
							$(this).html('OK');
						} else {
							var emailStr = $('#myEmail').attr('value')
							$('#myEmail').remove();
							$(this).parent().find('br').before(
									'<span class="email_d">' + emailStr
											+ '</span>');
							$(this).html(' Change Email ');
						}
					})
})