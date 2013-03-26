$(function(){
		   $('.openImg').click(function(){
						var This =$(this);
						This.parent().find(".orderDetail").toggleClass('treeview-collapsed');
						This.parent().find(".buyDetail").toggleClass('treeview-collapsed');
						This.parent().find(".calculationDetail").toggleClass('treeview-collapsed');
						var imgSrc = This.attr('src');
					if (imgSrc.indexOf('open1.png') > -1) {
						This.attr('src', 'image/open2.png');
						} else {
						This.attr('src', 'image/open1.png');
						}
						
										})
		   })