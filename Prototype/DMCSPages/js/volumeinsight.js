$(function() {
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
/*	var plot1 = jQuery.jqplot('chart1', [ data ], {
		seriesDefaults : {
			// Make this a pie chart.
			renderer : jQuery.jqplot.PieRenderer,
			rendererOptions : {
				// Put data labels on the pie slices.
				// By default, labels show the percentage of the slice.
				showDataLabels : true
			}
		},
		legend : {
			show : true,
			location : 'e'
		}
	});
*/
	$('.clickdown').click(
			function() {
				var This = $(this);
				This.parent().parent().find(".ownership").toggleClass(
						'treeview-collapsed');
				This.parent().parent().find(".path").toggleClass(
						'treeview-collapsed');
				This.parent().parent().find(".type1").toggleClass(
						'treeview-collapsed');
				var imgSrc = This.attr('src');
				if (imgSrc.indexOf('clickdown.png') > -1) {
					This.attr('src', 'image/clickleft.png');
				} else {
					This.attr('src', 'image/clickdown.png');
				}

			})

	$('.detail1').click(
			function() {
				var This = $(this);
				This.parent().parent().parent().find(".sontable").toggleClass(
						'treeview-expanded');
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
				} else {
					This.text("Detail");

				}

			})

})
