function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  var maxLength = Math.pow(2, tableData.length - 1);

  if (maxLength > 20) {
    var width = maxLength * 3;
  } else {
    var width = maxLength * 5;
  }
  table.setAttribute('width', '' + width + '%');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr')

    rowData.forEach(function(cellData) {
      if (cellData == null) {
        cellData = "-";
      }

      var cell = document.createElement('td');
      //cell.setAttribute('style', 'background-color: red;');
      var setColspan = maxLength / rowData.length;
      var width = setColspan * 100 / maxLength;
      cell.setAttribute('colspan', '' + setColspan, 'width', '' + width + '%');
      cell.setAttribute('style', 'colspan: ' + setColspan + '; width: ' + width + '%;')
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  document.body.appendChild(table);
}

/*
var array = [
  [100],
  [90, 120],
  [80, null, 110, null],
  [70, null, null, null, null, null, null, null],
  [60, 75, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
];
*/

var array = [[]];

var didClickIt = false;
document.getElementById("show").addEventListener("click", function() {
didClickIt = true;
});

setInterval(function(){

            if( didClickIt ) {
                didClickIt = false;
                // document.write causes silly problems, do this instead (or better yet, use a library like jQuery to do this stuff for you)
                array = document.getElementById("userInput").value;
                array = eval('' + array + '');

                createTable(array);
                
            }
        },500);

/*
createTable(
  array
);
*/
