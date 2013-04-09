$(function(){
		   $('.clickdown').click(function(){
						var This =$(this);
						This.parent().find(".ownership").toggleClass('treeview-collapsed');
						This.parent().find(".path").toggleClass('treeview-collapsed');
						This.parent().find(".calculationDetail").toggleClass('treeview-collapsed');
						var imgSrc = This.attr('src');
					if (imgSrc.indexOf('clickdown.png') > -1) {
						This.attr('src', 'image/clickleft.png');
						} else {
						This.attr('src', 'image/clickdown.png');
						}
						
										})
		   })