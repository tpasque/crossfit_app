

$(function () {
    $('#container').highcharts({

        title: {
            text: 'Top 40 Games Athletes Competition Progress',
            x: -20 //center
        },
        subtitle: {
            text: 'Source: CrossFit Games JSON',
            x: -20
        },
        xAxis: {
            categories: ['Event 1', 'Event 2', 'Event 3', 'Event 4', 'Event 5', 'Event 6',
                'Event 7']
        },
        yAxis: {
            title: {
                text: 'Points (Cumulative)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'Points'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Mathew Fraser',
            data: [56,94,94,88,94,7,17]
        }, {
          name: 'Ben Smith',
          data: [72,12,60,94,100,34,26]
        }, {
          name: 'Björgvin Karl Guðmundsson',
          data: [76,46,100,52,30,36,25]
        }, {
          name: 'Jonne Koski',
          data: [100,68,80,8,60,23,13]
        }, {
            name: 'Scott Panchik',
            data: [40,14,52,64,88,44,36]
        }, {
          name: 'Noah Ohlsen',
          data: [88,8,88,28,72,28,18]
        }, {
          name: 'Cole Sager',
          data: [42,76,54,46,26,42,40]
        }, {
          name: 'Dan Bailey',
          data: [68,22,46,12,76,50,50]
        }, {
            name: 'Alex Anderson',
            data: [54,56,68,54,42,17,24]
        }, {
          name: 'Tyson Takasaki',
          data: [30,72,50,68,52,15,7]
        }, {
          name: 'Ben Garard',
          data: [80,26,64,42,34,24,19]
        }, {
          name: 'Jon Pera',
          data: [16,30,48,100,48,20,21]
        }, {
            name: 'Graham Holmberg',
            data: [32,80,26,34,44,29,30]
        }, {
          name: 'Lukas Högberg',
          data: [36,100,58,20,10,20,22]
        }, {
          name: 'Jacob Heppner',
          data: [50,48,76,26,40,11,5]
        }, {
          name: 'Alex Vigneault',
          data: [22,54,36,48,58,10,28]
        }, {
            name: 'Adrian Conway',
            data: [46,12,72,14,68,27,16]
        }, {
          name: 'Aaron Hanna',
          data: [24,50,8,50,80,18,23]
        }, {
          name: 'Spencer Hendel',
          data: [64,18,22,44,54,21,29]
        }, {
          name: 'Elijah Muhammad',
          data: [0,88,2,84,18,16,42]
        }, {
            name: 'Travis Williams',
            data: [34,44,40,56,64,2,2]
        }, {
          name: 'Kevin Manuel',
          data: [52,52,10,36,14,42,34]
        }, {
          name: 'Chad Cole',
          data: [58,26,34,24,6,47,44]
        }, {
          name: 'Lucas Parker',
          data: [38,32,12,60,50,14,32]
        }, {
            name: 'Rob Forte',
            data: [26,64,32,22,84,4,4]
        }, {
          name: 'Daniel Tyminski',
          data: [8,42,56,32,38,30,27]
        }, {
          name: 'Khan Porter',
          data: [94,34,24,40,12,9,6]
        }, {
          name: 'Neal Maddox',
          data: [2,60,16,72,46,1,1]
        }, {
            name: 'Roy Gamboa',
            data: [14,28,14,38,56,6,38]
        }, {
          name: 'Chad Melton',
          data: [48,8,6,80,22,12,15]
        }, {
          name: 'Joe Scali',
          data: [28,40,30,4,2,38,47]
        }, {
          name: 'Phil Hesketh',
          data: [20,58,4,30,30,25,13]
        }, {
            name: 'Nick Urankar',
            data: [10,16,20,76,22,26,3]
        }, {
          name: 'Steven Fawcett',
          data: [60,0,28,6,34,32,10]
        }, {
          name: 'Nathan Bramblett',
          data: [12,36,42,16,26,13,11]
        }, {
          name: 'Austin Malleolo',
          data: [18,20,84,0,6,5,14]
        }, {
            name: 'Julian Alcaraz',
            data: [6,38,38,2,8,22,20]
        }, {
          name: 'Jordan Cook',
          data: [44,8,0,18,16,8,9]
        }, {
          name: 'Kevin Simons',
          data: [4,8,18,10,36,3,8]
        }, {
          name: 'Chad Mackay',
          data: [84,84,44,58,0,0,0]
        }]

    });
});

$(document).ready(function(){
  for (var i = 0; i < results.length; i++) {
    var name = results[i].name
    var event1 = results[i].wods[0].points
    var event2 = results[i].wods[1].points
    var event3 = results[i].wods[2].points
    var event4 = results[i].wods[3].points
    var event5 = results[i].wods[4].points
    var event6 = results[i].wods[5].points
    var event7 = results[i].wods[6].points
    var totalPoints = results[i].total_points

    col1 = "<tr><td>"+name+"</td>"
    col2 = "<td>"+event1+"</td>";
    col3 = "<td>"+event2+"</td>"
    col4 = "<td>"+event3+"</td>"
    col5 = "<td>"+event4+"</td>"
    col6 = "<td>"+event5+"</td>"
    col7 = "<td>"+event6+"</td>"
    col8 = "<td>"+event7+"</td>"
    col9 = "<td>"+totalPoints+"</td></tr>"


console.log(event1+event2+event3+event4+event5+event6+event7)
console.log(totalPoints)

$("#tabl").append(col1+col2+col3+col4+col5+col6+col7+col8+col9)
  }
});
