function addRow() {
         
    var atanan = document.getElementById("atanan");
    var alani = document.getElementById("alani");
    var altalan = document.getElementById("altalan");
    var adsoyad = document.getElementById("adsoyad");
    var not = document.getElementById("not");
    var table = document.getElementById("myTableData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var sayac=0;
    row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
    row.insertCell(1).innerHTML= sayac+1;
    row.insertCell(2).innerHTML= atanan.value;
    row.insertCell(3).innerHTML= alani.value;
    row.insertCell(4).innerHTML= altalan.value;
    row.insertCell(5).innerHTML= adsoyad.value;not.value;
    row.insertCell(6).innerHTML= '<a href="/Raporlandı/">Raporlandı</a> |';
    row.insertCell(7).innerHTML= '<a href="/Düzenlememler Yapılarak Yayınlanabilir/">Düzenlememler Yapılarak Yayınlanabilir</a> |';
    row.insertCell(8).innerHTML= "";

}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
   
}

function addTable() {
     
    var myTableDiv = document.getElementById("myDynamicTable");
     
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