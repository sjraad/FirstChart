/**
 * @author Selim J Raad
 */
// Credit Google
   
   var myTextStyle = {
      fontName: 'Times-Roman',
      fontSize: 18,
      bold: true,
      italic: true,
      // The color of the text.
      color: '#871b47',
      // The color of the text outline.
      auraColor: '#d799ae',
      // The transparency of the text.
      opacity: 0.8
   };
   
   	
	var myGrid = {
		'color':'#ff0000'
	};

	// Set chart options
    var options = {'title':'Real Gross National Product',
                   'width':600,
                   'height':500,
                   'hAxis':{},
                   'vAxis':{}
                  }; // end of options
		
	options.hAxis.textStyle = myTextStyle;
	options.vAxis.textStyle = myTextStyle;
	options.vAxis.gridlines = myGrid;
   		
   // Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        var arraysData = [];
        
           for(var i=0; i<Data.observations.length; i++){
                
                var itemArray = [];
                // have to use "new" keyword with Dates
                itemArray.push(new Date (Data.observations[i].date));
                itemArray.push( Number(Data.observations[i].value) );
                arraysData.push(itemArray);
            }
        
        	// Create the data table.
			var data = new google.visualization.DataTable();
			data.addColumn('date', 'Date');
			data.addColumn('number', 'GDP');
			data.addRows(arraysData);

         // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
