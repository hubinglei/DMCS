$(function() {
	$('table tr td a').click(function() {
		var This = $(this);
		var classStr = This.attr('class');
		var urls = classStr + ".html";
		$.ajax({
			url : urls,
			dataType : 'html',
			success : function(data) {
				$('#rightContent').html(data);
			}
		});

	})
})