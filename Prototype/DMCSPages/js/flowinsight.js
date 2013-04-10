$(function(){
		   	var data = [ [ 'LED Assembly', 12 ], [ 'Other Materials', 9 ],
			[ 'Lower Prism Film', 14 ], [ 'Bottom Diffuser', 16 ],
			[ 'Relflective Sheet', 7 ] ];
		var plot1 = jQuery.jqplot('chart1', [ data ], {
		seriesDefaults : {
			renderer : jQuery.jqplot.PieRenderer,
			rendererOptions : {
				showDataLabels : true
			}
		}
	});
		var plot2 = jQuery.jqplot('chart2', [ data ], {
		seriesDefaults : {
			renderer : jQuery.jqplot.PieRenderer,
			rendererOptions : {
				showDataLabels : true
			}
		}
	});
	
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

		   

		   $('.detail1').click(function(){
					var This =$(this);
					This.parent().parent().parent().find(".sontable").toggleClass('treeview-expanded');
					if (This.text() == "Detail") {
						This.text("OK");
						plot1.replot();
						plot2.replot();
						} else {
								This.text("Detail");
								
								}
						
										})
		   })
		   
