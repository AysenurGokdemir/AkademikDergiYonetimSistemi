function addRowMR() {
         
         
    //Veri tabanından veriler cekilecek
    
/*var atanan = document.getElementById("atanan");
var alani = document.getElementById("alani");
var altalan = document.getElementById("altalan");
var adsoyad = document.getElementById("adsoyad");
var not = document.getElementById("not");
var table = document.getElementById("myTableData");*/

var rowCount = table.rows.length;
var row = table.insertRow(rowCount);

row.insertCell(0).innerHTML= "";
row.insertCell(1).innerHTML= "";
row.insertCell(2).innerHTML= "";
row.insertCell(3).innerHTML= "";
row.insertCell(4).innerHTML= "";
row.insertCell(5).innerHTML= "";
row.insertCell(6).innerHTML= "";
row.insertCell(7).innerHTML= ""
row.insertCell(8).innerHTML= "";

}
function addTable() {

var myTableDiv = document.getElementById("makaleRaporları");

var table = document.createElement('TABLE');
table.border='1';

var tableBody = document.createElement('TBODY');
table.appendChild(tableBody);

for (var i=0; i<8; i++){
  var tr = document.createElement('TR');
  tableBody.appendChild(tr);
 
  for (var j=0; j<8; j++){
      var td = document.createElement('TD');
      td.width='75';
      td.appendChild(document.createTextNode("Cell " + i + "," + j));
      tr.appendChild(td);
  }
}
myTableDiv.appendChild(table);

}

function load() {

console.log("Page load finished");

}