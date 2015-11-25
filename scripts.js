/**
 * @author Selim J Raad
 */
// Credit Google
   // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        var myDataArray = [];
        var myObs = allMyData.observations;
        
            for(var i=0; i<myObs.length; i++){
                
                var myItem = [];
                myItem.push(myObs[i].date);
                myItem.push(Number(myObs[i].value));
                myDataArray.push(myItem);
            }
        
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'GDP');
        data.addRows(myDataArray);

        // Set chart options
        var options = {'title':'Real Gross National Product',
                       'width':1000,
                       'height':300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
