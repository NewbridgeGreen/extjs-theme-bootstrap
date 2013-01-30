Ext.define('ChartModel', {
    extend: 'Ext.data.Model',
    idProperty: 'ID',
    fields: [
     { name: 'ID', type: 'number' },
     { name: 'Month', type: 'string' },
     { name: 'Sample1', useNull: true },     // NOTE: useNull and no type: 'float'
     { name: 'Sample2', useNull: true }     // NOTE: useNull and no type: 'float'
    ]
});

var chartData = [
 [1, "Jan-11", 40.00, 29],
 [2, "Feb-11", 20.00, 28],
 [3, "Mar-11", 20.00, 28],
 [4, "Apr-11", 40.00, 28],
 [5, "May-11", 20.00, 28],
 [6, "Jun-11", 40.00, 28],
 [7, "Jul-11", 20.00, 28],
 [8, "Aug-11", 40.00, 28],
 [9, "Sep-11", 20.00, 28],
 [10, "Oct-11", 40.00, 28],
 [11, "Nov-11", 20.00, 28],
 [12, "Dec-11", 40.00, 28],
 [13, "Jan-12", 30.00, 28]
];

Ext.define("App2.view.SimpleChart", {
    extend: 'Ext.chart.Chart',
    alias: 'widget.simplechart',
    store: Ext.create('Ext.data.ArrayStore', {
        model: 'ChartModel',
        data: chartData,
        autoLoad: true
    }),
    requires: ['Ext.chart.*'],

    title: 'Simple Line Chart',
    style: 'background:#fff',
    legend: {
        position: 'right'
    },
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['Sample1'],
        title: 'Value'
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['Month'],
        title: 'Month'
    }],
    series: [{
        type: 'line',
        axis: 'left',
        xField: 'Month',
        yField: 'Sample1'
    }, {
        type: 'line',
        axis: 'left',
        xField: 'Month',
        yField: 'Sample2'
    }]
});


