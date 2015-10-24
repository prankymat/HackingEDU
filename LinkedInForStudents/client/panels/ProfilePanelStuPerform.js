Template.ProfilePanelStuPerform.onRendered(function(){ 
   var chart = new CanvasJS.Chart("chartContainer",
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
    chart.render();
     
});


