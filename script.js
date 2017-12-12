$(document).ready(function(){
      $('.parallax').parallax();

Highcharts.setOptions({
    colors: ['#E23E28', '#E2896A']
    });


  Highcharts.chart('container', {
    chart: {
        type: 'column'
    },

    title: {
        text: 'Stacked column chart'
    },
    xAxis: {
        categories: ['2010', '2011', '2012', '2013', '2014']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Overall Jail Population'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
        shared: true
    },
    plotOptions: {
        column: {
            stacking: 'percent'
        }
    },
    series: [{
        name: 'Inmates with Mental Health Issues',
        data: [3784.21, 4092.8, 4177.58, 4375.99, 4335.04]
    }, {
        name: 'General Population',
        data: [9264.79, 8697.2, 8109.42, 7451.01, 7072.96]
    }]
});
    });

