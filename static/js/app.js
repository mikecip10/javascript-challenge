// from data.js
var tableData = data;

var tbody = d3.select("tbody");

 data.forEach(function(sighting) {
  console.log(sighting);
  var row = tbody.append("tr");
   Object.entries(sighting).forEach(function([key, value]) {
     console.log(key, value);
     var cell = tbody.append("td");
     cell.text(value);
   });
 });

 var submit = d3.select("#submit");

 submit.on("click", function() {

   d3.select(".summary").html("");
 
   var inputElement = d3.select("#datetime");
   var inputValue = inputElement.property("value");
 
   var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
 
   filteredData.forEach((ufoData) => {
     var row = tbody.append("tr");
     Object.entries(ufoData).forEach(([key, value]) => {
       var cell = tbody.append("td");
       cell.text(value);
     });
   });
 });