var arr;


Template.ProfilePanelStuPerform.helpers({
  query_param: function() {
    return this.aTeacherID;
  },

  theTeacher: function() {
    arr= (Teacher.findOne({TeacherID:parseInt(this.aTeacherID)}));
  }
});




Template.ProfilePanelStuPerform.onRendered(function(){
    var testarr= arr.Tests;
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
        {y: testarr[0], label: "A+"},
        {y: testarr[1],  label: "A" },
        {y: testarr[2],  label: "A-"},
        {y: testarr[3],  label: "B+"},
        {y: testarr[4],  label: "B"},
        {y: testarr[5], label: "B-"},
        {y: testarr[6],  label: "C+"},        
        {y: testarr[7],  label: "C"},
        {y: testarr[8], label: "C-"},
        {y: testarr[9], label: "D"},
        {y: testarr[10], label: "F"},
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
