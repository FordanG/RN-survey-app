define({ 

 //Type your controller code here 
createPieChart: function(data,nCharts){

  var pieCharts = [];

  for (var i = 0; i < nCharts; ++i) {
      pieCharts[i] = new com.voltmxmp.piechart(

{
	"clipBounds": true,
	"id": `pieChart ${i}`,
	"height": "70%",
	"width": "100%",
	"top": "20DP",
	"left": "0%",
	"skin": "CopyslFbox2",
	"layoutType": voltmx.flex.FLOW_VERTICAL,
	"masterType": constants.MASTER_TYPE_USERWIDGET,
	"isVisible": true,
	"zIndex": 1

}, {}, {});
    pieCharts[i].chartTitle = `Question ${i+1}`;
    
    
  }


/* Setting the component s properties */

// pieChart.bgColor = "#ffffff";
// pieChart.chartData = data;
// pieChart.enableStaticPreview = true;
// pieChart.enableLegend = true;
// pieChart.chartTitle = "Question 1";
// pieChart.titleFontColor = "#000000";
// pieChart.legendFontColor = "#000000";
// pieChart.titleFontSize = "12";
// pieChart.legendFontSize = "8";



/* Adding the component to the form */

  for (var i = 0; i < nCharts; ++i) {
    this.view.add(pieCharts[i]);
  }


this.view.forceLayout();


    for (var i = 0; i < nCharts; ++i) {
   pieCharts[i].createChart(data[i]);
  }

  }
 });