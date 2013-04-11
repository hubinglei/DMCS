$(function(){
		   	var data = [ [ 'LED Assembly', 12 ], [ 'Other Materials', 9 ],
			[ 'Lower Prism Film', 14 ], [ 'Bottom Diffuser', 16 ],
			[ 'Relflective Sheet', 7 ] ];
	function jqplotfun(chart, data) {
		  var plot = jQuery.jqplot( chart, data, {
			seriesDefaults : {
			  renderer : jQuery.jqplot.PieRenderer,
			  rendererOptions : {
				showDataLabels : true
			  }
			}
		 
		  });
 		 return plot;
    }
var plot1 = jqplotfun('chart1', [ data ]);
var plot2 = jqplotfun('chart2', [ data ]);
var plot3 = jqplotfun('chart3', [ data ]);
var plot4 = jqplotfun('chart4', [ data ]);
var plot5 = jqplotfun('chart5', [ data ]);
var plot6 = jqplotfun('chart6', [ data ]);
var plot7 = jqplotfun('chart7', [ data ]);
var plot8 = jqplotfun('chart8', [ data ]);
var plot9 = jqplotfun('chart9', [ data ]);
var plot10 = jqplotfun('chart10', [ data ]);
var plot11 = jqplotfun('chart11', [ data ]);
var plot12 = jqplotfun('chart12', [ data ]);
var plot13 = jqplotfun('chart13', [ data ]);
var plot14 = jqplotfun('chart14', [ data ]);
var plot15 = jqplotfun('chart15', [ data ]);
var plot16 = jqplotfun('chart16', [ data ]);
var plot17 = jqplotfun('chart17', [ data ]);
var plot18 = jqplotfun('chart18', [ data ]);
var plot19 = jqplotfun('chart19', [ data ]);
var plot20 = jqplotfun('chart20', [ data ]);
var plot21 = jqplotfun('chart21', [ data ]);
var plot22 = jqplotfun('chart22', [ data ]);
var plot23 = jqplotfun('chart23', [ data ]);
var plot24 = jqplotfun('chart24', [ data ]);
var plot25 = jqplotfun('chart25', [ data ]);
var plot26 = jqplotfun('chart26', [ data ]);

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
						plot3.replot();
						plot4.replot();
						plot5.replot();
						plot6.replot();
						plot7.replot();
						plot8.replot();
						plot9.replot();
						plot10.replot();
						plot11.replot();
						plot12.replot();
						plot13.replot();
						plot14.replot();
						plot15.replot();
						plot16.replot();
						plot17.replot();
						plot18.replot();
						plot19.replot();
						plot20.replot();
						plot21.replot();
						plot22.replot();
						plot23.replot();
						plot24.replot();
						plot25.replot();
						plot26.replot();
						} else {
								This.text("Detail");
								
								}
						
										})
		   })
		   
