$("#top40").click(function(){

  for (var i = 0; i < results.length; i++) {
    var athleteName = results[i].name
    var cfLink = results[i].href
    var totalPoints = results[i].total_points
    var rank = results[i].rank
    var affiliate = results[i].affiliate
    var state = results[i].state
    var country = results[i].country

    // col1 = "<tr><td><img src="+'mathewfraser.jpg'+" height=75px, width=75px/></td>"
    col2 = "<tr><td>"+athleteName+"</td>";
    col3 = "<td>"+affiliate+"</td>"
    col4 = "<td>"+state+"</td>"
    col5 = "<td>"+country+"</td>"
    col6 = "<td>"+totalPoints+"</td>"
    col7 = "<td>"+rank+"</td></tr>"

    $("#tabl").append(col2+col3+col4+col5+col6+col7);
  }
});

//
// for (var i = 0; i < results.length; i++) {
//   var country = results[i].country
//   console.log(country)
// }
// $("#top40").click(function(){
//
//   for (var i = 0; i < results.length; i++) {
//     var athleteName = results[i].name
//     var cfLink = results[i].href
//     var totalPoints = results[i].total_points
//     var rank = results[i].rank
//
//     col1 = "<tr><td>"+athleteName+"</td>";
//     col2 = "<td>"+cfLink+"</td>"
//     col3 = "<td>"+totalPoints+"</td>"
//     col4 = "<td>"+rank+"</td></tr>"
//
//     $("#tabl").append(col1+col2+col3+col4);
//   }
// });
