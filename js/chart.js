$(function () {
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Top 40 CrossFit Games World Wide Competitors'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Percentage of Top 40 CrossFitters by Country',
            colorByPoint: true,
            data: [{
                name: 'American CrossFitters',
                y: 26
            }, {
                name: 'Canadian CrossFitters',
                y: 4,
                sliced: true,
                selected: true
            }, {
                name: 'European CrossFitters',
                y: 3
            }, {
                name: 'Iceland CrossFitters',
                y: 1
            }, {
                name: 'Australian CrossFitters',
                y: 4
            }, {
                name: 'New Zealand CrossFitters',
                y: 1
            }, {
                name: 'United Arab Emirates',
                y: 1
            }]
        }]
    });
});
