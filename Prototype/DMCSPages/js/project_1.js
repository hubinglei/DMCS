$(function() {
	$('.navTitle').click(function() {
		$.ajax({
			url : 'project.html',
			dataType : 'html',
			success : function(data) {
				$('#rightContent').html(data);
			}
		});

	})
})