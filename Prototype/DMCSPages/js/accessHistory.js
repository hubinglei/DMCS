$(function() {

	var plot1 = $.jqplot ('chart2', [[3,7,9,1,4,6,8,2,5]],{
		  seriesDefaults: {
		   renderer:$.jqplot.canvasTextRenderer,	  
          rendererOptions: {
              smooth: true
          }
      },
	  title: 'Write In',});
	
	var s1 = [2, 9, 11, 3,2,7];	
	var ticks =['12/24','01/14','02/04','02/25','03/18','04/08','04/29','05/20','06/10','07/01','07/22','08/12','09/02']
	var plot2 = $.jqplot ('chart1', [s1],{
		seriesDefaults:{
				renderer:$.jqplot.BarRenderer,
				rendererOptions: {fillToZero: true}
               },
        axes: {
        xaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                ticks: ticks
             }
	     	},
		    series:[{color:'#f17f49'}],
		    title: 'Authentication',
			}
	);	   
	
	
	var line1 = [[0, 7], [2, 2, 4, 17, 6, 0]];
	var plot3 = $.jqplot("chart3", [line1], {
           seriesDefaults: {
			   renderer:$.jqplot.BezierCurveRenderer
			   },
		   series:[{color:'#87d2a0'}],	   
		   title: 'Read Out'
    });

	
	$('.tabnav-tabs li').click(function() {
		var This = $(this);
		$('.tabnav-tabs li a').removeClass('selected');
		This.find('a').addClass('selected');
		var current = This.find('a').find('span').html();
		if (current == 'Data') {
			$('#graphInfor').hide();
			$('#dataInfor').show();
		} else {
			$('#dataInfor').hide();
			$('#graphInfor').show();
			plot1.replot();
			plot2.replot();
			plot3.replot();
		}

	})

})