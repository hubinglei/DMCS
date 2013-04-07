$(function() {

	$('#rightContent').load('profile.html');

	$('ul.left-menu li').click(function() {
		var This = $(this);
		$('ul.left-menu li').removeClass('selected');
		This.addClass('selected');
		var idStr = This.attr('id');
		var urls = idStr + ".html";
		$.ajax({
			url : urls,
			dataType : 'html',
			success : function(data) {
				$('#rightContent').html(data);
			}
		});

	})
})