Template.ProfilePanelStuPerform.onRendered(function(){ 
   var barchart = new CanvasJS.Chart("BarChartContainer",
    {
      title:{
        text: "Students/Grades"    
      },
      animationEnabled: true,
      axisY: {
        title: "Students"
      },
      legend: {
        verticalAlign: "bottom",
        horizontalAlign: "center"
      },
      theme: "theme2",
      data: [

      {        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Students",
        dataPoints: [      
        {y: 60, label: "A+"},
        {y: 600,  label: "A" },
        {y: 170,  label: "A-"},
        {y: 458,  label: "B+"},
        {y: 203,  label: "B"},
        {y: 978, label: "B-"},
        {y: 282,  label: "C+"},        
        {y: 235,  label: "C"},
        {y: 122, label: "C-"},
        {y: 132, label: "D+"},
        {y: 552, label: "D"},
        {y: 122, label: "D-"},
        {y: 12, label: "F"},
        ]
      }   
      ]
    });
    barchart.render();
   
   
   var piechart = new CanvasJS.Chart("PieChartContainer",
	{
		title:{
			text: "Percentage of Graduates"
		},
                animationEnabled: true,
		legend:{
			verticalAlign: "center",
			horizontalAlign: "left",
			fontSize: 20,
			fontFamily: "Helvetica"        
		},
		theme: "theme2",
		data: [
		{        
			type: "pie",       
			indexLabelFontFamily: "Garamond",       
			indexLabelFontSize: 20,
			indexLabel: "{label} {y}%",
			startAngle:-20,      
			showInLegend: true,
			toolTipContent:"{legendText} {y}%",
			dataPoints: [
				{  y: 0.50, legendText:"Top 10 Universities", label: "Top 10 Universities" },
				{  y: 0.50, legendText:"Top 20 Universities", label: "Top 20 Universities" },
				{  y: 0.50, legendText:"Top 30 Universities", label: "Top 30 Universities" },
				{  y: 0.50, legendText:"Top 40 Universities" , label: "Top 40 Universities"},       
				{  y: 0.50, legendText:"Top 50 Universities" , label: "Top 50 Universities"},
                {  y: 0.50, legendText:"Other Colleges" , label: "Other Colleges"},
                {  y: 97.00, legendText:"College Dropouts" , label: "College Dropouts"}
			]
		}
		]
	});
	piechart.render();
});


