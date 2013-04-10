$(function() {
	var data = [ [ 'LED Assembly', 12 ], [ 'Other Materials', 9 ],
			[ 'Lower Prism Film', 14 ], [ 'Bottom Diffuser', 16 ],
			[ 'Relflective Sheet', 7 ] ];
	var plot1 = jQuery.jqplot('chart1', [ data ], {
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
				} else {
					This.text("Detail");

				}

			})

})
