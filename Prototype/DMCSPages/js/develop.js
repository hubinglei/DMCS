$(function() {
	$('.open').click(function(e) {
		e.preventDefault();
		var This = $(this);
		This.parent().parent().toggleClass('treeview-collapsed');
		var imgSrc = This.attr('src');
		if (imgSrc.indexOf('closed.png') > -1) {
			This.attr('src', 'image/open.png');
		} else {
			This.attr('src', 'image/closed.png');
		}
	});

	$('ul#leftUl li a span').click(function() {
		$(this).parent().find('.open').click();
	})

})