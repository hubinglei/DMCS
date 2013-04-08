$(function() {
	$.progress = function(target, options) {
		var id = target;
		var opts = (options != null) ? options : {};
		var title = options.title;
		var tips = options.tips;
		var progress = options.progress;
		var scale = options.scale
		var scale1 = options.scale1
		var scale2 = options.scale2
		var scaleDiv = '<div class="text1"><ul class="textul"><li class="textli1">'
				+ scale
				+ '</li><li class="textli2">'
				+ scale1
				+ '</li><li class="textli3">' + scale2 + '</li></ul></div><br>'
		var progressDiv = '<div><div class="label1"><div id="title">' + title
				+ '</div></div><div class="progress"> <span style="width:'
				+ progress
				+ ';"></span> </div><div class="label2"><div class="tips"> '
				+ tips + '</div></div></div>'

		$('#' + id).html(
				'<section class="container">' + scaleDiv + progressDiv
						+ '</section>')
			
			
		$('.progress span').mouseenter(function() {
								$(this).parent().parent().find(".label2").css('visibility','visible')	 
									 }).mouseleave(function() {
				$(this).parent().parent().find(".label2").css('visibility','hidden')
			});

	}
	
	
	
})
