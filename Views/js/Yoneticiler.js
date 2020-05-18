/***
 
 *  Bu sayfada hem kayıtlı yoneticiler gosterilecek hemde yonetici ekleme işlemi yapılacak

**/
var sayac=0
function addRow() {
    
       
    var kullanici = document.getElementById("kuladi");
    var adsoyad = document.getElementById("ad");
    
    var table = document.getElementById("yoneticilerTable");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    sayac=sayac+1;
    row.insertCell(0).innerHTML= '<input type="button" value = "Duzenle">';
    row.insertCell(1).innerHTML= sayac;
    row.insertCell(2).innerHTML= kuladi.value;
    row.insertCell(3).innerHTML= ad.value;
    

}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("yoneticilerTable");
    table.deleteRow(index);
   
}

function addTable() {
     
    var myTableDiv = document.getElementById("yoneticilerTable");
     
    var table = document.createElement('TABLE');
    table.border='1';
   
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
     
    for (var i=0; i<4; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
      
       for (var j=0; j<4; j++){
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