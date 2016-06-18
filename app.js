
var dataOfdata = data.map(function(curr){
  var obj = {};
  obj.year = curr[11];
  obj.age = curr[12];
  obj.race = curr[9];
  return obj;
});


$( document ).ready(function() {

d3.select('.holder').selectAll('div')
              .data(dataOfdata)
              .enter()
              .append('div')
              .style('height', function(d) {
                return d.age;
              })
              .style('fill', 'blue')
              .text(function(d) {
                return d.year;
              });       

  // $.ajax({
	//     url: 'http://example.com/',
	//     type: 'GET',
	//     data: 'ID=1&Name=John&Age=10', // or $('#myform').serializeArray()
	//     success: function() { alert('GET completed'); }
	// });




})