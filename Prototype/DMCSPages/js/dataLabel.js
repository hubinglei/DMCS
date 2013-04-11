$(function() {
	$('.edit')
			.click(
					function() {
						var This = $(this);
						var trobj = This.parent().parent();
						if (This.html() != 'OK') {
							This.html('OK');
							trobj.find('.labelName').html(
									'<input type="text" value="'
											+ trobj.find('.labelName').html()
											+ '"> ')
							trobj.find('.explainI').html(
									'<input type="text" value="'
											+ trobj.find('.explainI').html()
											+ '"> ')
							trobj
									.find('.mycolor')
									.html(
											'<div class="block-select"><a href="javascript:void(0)" class="bgImg" ></a></div>')
							$(".bgImg").bigColorpicker(function(el, color) {
								$(el).css("backgroundColor", color);
							});

						} else {
							This.html('Edit');
							trobj.find('.labelName').html(
									trobj.find('.labelName').find('input')
											.attr('value'));
							trobj.find('.explainI').html(
									trobj.find('.explainI').find('input').attr(
											'value'))
							if (trobj.find('.mycolor').find('.block-select')
									.find('a').css('background-color') != 'transparent') {
								trobj.find('.mycolor').css(
										'background-color',
										(trobj.find('.mycolor').find(
												'.block-select').find('a')
												.css('background-color')));
							}
							trobj.find('.mycolor').find('.block-select')
									.remove();
						}

					})

})