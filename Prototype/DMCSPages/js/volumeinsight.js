$(function(){
		   $('.clickdown').click(function(){
						var This =$(this);
						This.parent().parent().find(".ownership").toggleClass('treeview-collapsed');
						This.parent().parent().find(".path").toggleClass('treeview-collapsed');
						This.parent().parent().find(".type1").toggleClass('treeview-collapsed');
						var imgSrc = This.attr('src');
					if (imgSrc.indexOf('clickdown.png') > -1) {
						This.attr('src', 'image/clickleft.png');
						} else {
								This.attr('src', 'image/clickdown.png');
								}
						
										})
		   })
		   
$(function(){
		   $('.detail1').click(function(){
					var This =$(this);
					This.parent().parent().parent().find(".sontable").toggleClass('treeview-expanded');
					if (This.text() == "Detail") {
						This.text("OK");
						} else {
								This.text("Detail");
								
								}
						
										})
		   })
		   
